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
  fetchEarlyArrivalsByHotel: new Method({
    method: 'GET',
    path: '/fetchEarlyArrivalsByHotel/{hotelId}',
    urlParams: ['hotelId'],
  }),
  fetchLateDeparturesByHotel: new Method({
    method: 'GET',
    path: '/fetchLateDeparturesByHotel/{hotelId}',
    urlParams: ['hotelId'],
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup',
  }),
})
