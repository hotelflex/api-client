var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('reservations', {
  calculatePrices: new Method({
    method: 'POST',
    path: '/calculatePrices'
  }),
  handleDaySlotReservationFailed: new Method({
    method: 'POST',
    path: '/handleDaySlotReservationFailed'
  }),
  handleDaySlotReserved: new Method({
    method: 'POST',
    path: '/handleDaySlotReserved'
  }),
  handleDaySlotReleased: new Method({
    method: 'POST',
    path: '/handleDaySlotReleased'
  }),
  release: new Method({
    method: 'POST',
    path: '/{id}/release',
    urlParams: [ 'id' ]
  }),
  reserve: new Method({
    method: 'POST',
    path: '/{id}/reserve',
    urlParams: [ 'id' ]
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  })
});
