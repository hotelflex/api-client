var Entity = require('../../../Entity');
var Method = require('../../../Method');

module.exports = new Entity('systemManagers', {
  disable: new Method({
    method: 'POST',
    path: '/{id}/disable',
    urlParams: [ 'id' ]
  }),
  enable: new Method({
    method: 'POST',
    path: '/{id}/enable',
    urlParams: [ 'id' ]
  }),
  pullAvailability: new Method({
    method: 'POST',
    path: '/{id}/pullAvailability',
    urlParams: [ 'id' ]
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  retrieveByHotel: new Method({
    method: 'GET',
    path: '/retrieveByHotel/{hotelId}',
    urlParams: [ 'hotelId' ]
  }),
  search: new Method({
    method: 'GET'
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup'
  }),
  syncReservations: new Method({
    method: 'POST',
    path: '/{id}/syncReservations',
    urlParams: [ 'id' ]
  }),
  update: new Method({
    method: 'POST',
    path: '/{id}/update',
    urlParams: [ 'id' ]
  })
});
