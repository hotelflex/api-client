var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('campaigns', {
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
