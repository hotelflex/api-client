var Entity = require('../../Entity')
var Method = require('../../Method')
var Notifications = require('./Notifications')

module.exports = new Entity('systemManagers', {
  Notifications: Notifications,
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
  fetchEarlyArrivalsByHotel: new Method({
    method: 'POST',
    path: '/fetchEarlyArrivalsByHotel',
  }),
  fetchLateDeparturesByHotel: new Method({
    method: 'POST',
    path: '/fetchLateDeparturesByHotel',
  }),
})
