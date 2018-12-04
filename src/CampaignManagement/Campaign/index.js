var Entity = require('../../Entity')
var Method = require('../../Method')
var Channel = require('./Channel')
var WebTranslation = require('./WebTranslation')

module.exports = new Entity('campaigns', {
  Channel: Channel,
  WebTranslation: WebTranslation,
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  retrieveECIBySM: new Method({
    method: 'GET',
    path: '/retrieveECIBySM/{systemManagerId}',
    urlParams: ['systemManagerId'],
  }),
  retrieveLCOBySM: new Method({
    method: 'GET',
    path: '/retrieveLCOBySM/{systemManagerId}',
    urlParams: ['systemManagerId'],
  }),
  enable: new Method({
    method: 'POST',
    path: '{id}/enable',
  }),
  disable: new Method({
    method: 'POST',
    path: '{id}/disable',
  }),
})
