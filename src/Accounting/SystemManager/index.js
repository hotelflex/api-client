var Entity = require('../../Entity')
var Method = require('../../Method')
var Notification = require('./Notification')

module.exports = new Entity('systemManagers', {
  Notification: Notification,
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
  getTransactionsByTripIds: new Method({
    method: 'POST',
    path: '/getTransactionsByTripIds',
  }),
  setupXero: new Method({
    method: 'POST',
    path: '/{id}/setupXero',
    urlParams: ['id'],
  }),
  update: new Method({
    method: 'POST',
    path: '/{id}/update',
    urlParams: ['id'],
  }),
  enableAutoBilling: new Method({
    method: 'POST',
    path: '/{id}/enableAutoBilling',
    urlParams: ['id'],
  }),
  disableAutoBilling: new Method({
    method: 'POST',
    path: '/{id}/disableAutoBilling',
    urlParams: ['id'],
  }),
  getExchangeRates: new Method({
    method: 'POST',
    path: '/getExchangeRates',
  }),
})
