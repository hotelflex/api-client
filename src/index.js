var path = require('path')
var fetch = require('isomorphic-fetch')
var utils = require('./utils')
var Entity = require('./Entity')
var Method = require('./Method')
var ApiError = require('./ApiError')
var Analytics = require('./Analytics')
var Auth = require('./Auth')
var CampaignManagement = require('./CampaignManagement')
var HotelManagement = require('./HotelManagement')
var Integrations = require('./Integrations')
var InventoryManagement = require('./InventoryManagement')
var TripManagement = require('./TripManagement')
var UserManagement = require('./UserManagement')

var conf = {
  Analytics: Analytics,
  Auth: Auth,
  CampaignManagement: CampaignManagement,
  HotelManagement: HotelManagement,
  Integrations: Integrations,
  InventoryManagement: InventoryManagement,
  TripManagement: TripManagement,
  UserManagement: UserManagement,
}

function convertArgsToList(argsObj) {
  var args = []
  var l = Object.keys(argsObj).length
  for (var i = 0; i < l; i++) {
    args.push(argsObj[String(i)])
  }
  return args
}

function getApiUrl(environment) {
  if (environment === 'production') {
    return 'https://api.hotelflex.io'
  } else {
    return 'http://localhost:5050'
  }
}

function request(method, p, data, opts, environment, authToken) {
  var headers = { 'Content-Type': 'application/json' }
  if (authToken) {
    headers.Authorization = 'Bearer ' + authToken
  }

  var apiUrl = getApiUrl(environment)

  var fP
  if (method === 'GET') {
    var query = utils.stringifyRequestData(data)
    var reqPath = apiUrl + '/' + p + '?' + query
    fP = fetch(reqPath, { method: method, headers: headers })
  } else {
    var reqPath = apiUrl + '/' + p
    var body = JSON.stringify(data)
    fP = fetch(reqPath, { method: method, body: body, headers: headers })
  }

  return new Promise(function(resolve, reject) {
    fP.then(function(resp) {
      if (resp.status === 204) {
        return resolve()
      }
      if (resp.status === 200 || resp.status === 201) {
        return resp
          .json()
          .then(function(rJson) {
            resolve(rJson)
          })
          .catch(function(err) {
            reject(err)
          })
      }

      if (resp.status >= 400) {
        return resp
          .json()
          .then(function(e) {
            reject(new ApiError(e.error, resp.status))
          })
          .catch(function(err) {
            reject(err)
          })
      }
    }).catch(function(err) {
      reject(err)
    })
  })
}

var sMap = {
  AU: true,
  CAMP: true,
  HM: true,
  INT: { MEWS: true, OPERA: true },
  INV: true,
  TRP: true,
  USER: true,
  ANYL: true,
}
function fixSvcCode(_p) {
  var paths = _p.split('/')
  var _sMap = sMap
  var c = 0
  for (var i = 0; i < paths.length; i++) {
    var r = _sMap[paths[i]]
    c += 1
    if (typeof r === 'boolean') {
      break
    } else {
      _sMap = r
    }
  }
  var svcPath = paths.slice(0, c).join('/')
  var svcCode = paths.slice(0, c).join('.')
  return _p.replace(svcPath, svcCode)
}

function createMethod(_path, opts, environment, authToken) {
  var _p = fixSvcCode(_path)
  var urlIP = utils.makeURLInterpolator(_p)
  return function() {
    var args = convertArgsToList(arguments)
    var urlData = {}

    for (var i = 0; i < opts.urlParams.length; i++) {
      var param = opts.urlParams[i]
      urlData[param] = args.shift()
    }

    var _data = utils.getDataFromArgs(args)
    var _opts = utils.getOptionsFromArgs(args)

    var p = urlIP(urlData).replace(/\\/g, '/')
    return request(opts.method, p, _data, _opts, environment, authToken)
  }
}

function processChild(cPath, child, cli) {
  if (child instanceof Entity) {
    var obj = {}
    var _path = path.join(cPath, child.path)
    Object.keys(child.children).forEach(function(k) {
      obj[k] = processChild(_path, child.children[k], cli)
    })
    return obj
  } else if (child instanceof Method) {
    var _path = path.join(cPath, child.path)
    return createMethod(_path, child, cli.environment, cli.authToken)
  }
}

function Client(environment, authToken) {
  var self = this
  if (authToken) {
    this.authToken = authToken
  }
  if (!environment) {
    throw new Error('Missing environment.')
  }
  this.environment = environment

  Object.keys(conf).forEach(function(k) {
    self[k] = processChild('', conf[k], self)
  })
}

module.exports = Client
