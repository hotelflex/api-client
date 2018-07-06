var qs = require('qs');
var isPlainObject = require('lodash.isplainobject');
var _ = require('lodash');

function isOptionsHash(o) {
  return isPlainObject && [ 'transactionId', 'operationId' ].some(function(k) { return !_.isNil(o[k]) });
};

function stringifyRequestData(data) {
  return qs.stringify(data, { arrayFormat: 'brackets' });
};

var makeURLInterpolator = (function() {
  var rc = {
    '\n': '\\n',
    '\"': '\\\"',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
  };
  return function(str) {
    var cleanString = str.replace(/["\n\r\u2028\u2029]/g, function($0) { return rc[$0] });
    return function(outputs) {
      return cleanString.replace(/\{([\s\S]+?)\}/g, function($0, $1) {
        return encodeURIComponent(outputs[$1] || '');
      });
    };
  };
})();

function getDataFromArgs(args) {
  if (args.length > 0) {
    if (isPlainObject(args[0]) && !isOptionsHash(args[0])) {
      return args.shift();
    }
  }
  return {};
};

function getOptionsFromArgs(args) {
  var opts = { headers: {} };
  if (args.length > 0) {
    var arg = args.slice(-1)[0];
    if (isOptionsHash(arg)) {
      var params = args.pop();
      if (params.transactionId) { opts.headers.transactionId = params.transactionId; }
      if (params.operationId) { opts.headers.operationId = params.operationId; }
    }
  }
  return opts;
};

function arrayToObject(arr) {
  if (Array.isArray(arr)) {
    var obj = {};
    arr.map(function(item, i) { obj[i.toString()] = item; });
    return obj;
  }
  return arr;
};

module.exports = {
  isOptionsHash: isOptionsHash,
  stringifyRequestData: stringifyRequestData,
  makeURLInterpolator: makeURLInterpolator,
  getDataFromArgs: getDataFromArgs,
  getOptionsFromArgs: getOptionsFromArgs,
  arrayToObject: arrayToObject
};
