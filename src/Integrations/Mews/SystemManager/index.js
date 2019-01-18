var Entity = require('../../../Entity')
var Method = require('../../../Method')

module.exports = new Entity('systemManagers', {
  disable: new Method({
    method: 'POST',
    path: '/{id}/disable',
    urlParams: ['id'],
  }),
  enable: new Method({
    method: 'POST',
    path: '/{id}/enable',
    urlParams: ['id'],
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  retrieveByHotel: new Method({
    method: 'GET',
    path: '/retrieveByHotel/{hotelId}',
    urlParams: ['hotelId'],
  }),
  search: new Method({
    method: 'GET',
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup',
  }),
  checkProperty: new Method({
    method: 'POST',
    path: '/checkProperty',
  }),
})
