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
  getReport: new Method({
    method: 'GET',
    path: '/{id}/getReport',
    urlParams: ['id'],
  }),
  getReportByHotel: new Method({
    method: 'GET',
    path: '/getReportByHotel/{hotelId}',
    urlParams: ['hotelId'],
  }),
  getPlatformReport: new Method({
    method: 'GET',
    path: '/getPlatformReport',
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup',
  }),
})
