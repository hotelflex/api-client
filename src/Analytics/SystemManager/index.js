var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('systemManagers', {
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
  weeklySummary: new Method({
    method: 'GET',
    path: '/{id}/weeklySummary',
    urlParams: ['id'],
  }),
  weeklySummaryForPlatform: new Method({
    method: 'GET',
    path: '/weeklySummaryForPlatform',
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup',
  }),
})
