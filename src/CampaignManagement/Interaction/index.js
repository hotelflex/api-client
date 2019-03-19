var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('interactions', {
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  search: new Method({
    method: 'GET',
    path: '/',
  }),
  fetchBookingAppData: new Method({
    method: 'POST',
    path: '/{id}/fetchBookingAppData',
    urlParams: ['id'],
  }),
  fetchBookingAppDataByShortId: new Method({
    method: 'POST',
    path: '/fetchBookingAppDataByShortId',
  }),
  fetchBookingStage: new Method({
    method: 'GET',
    path: '/{id}/fetchBookingStage',
    urlParams: ['id'],
  }),
  reserve: new Method({
    method: 'POST',
    path: '/{id}/reserve',
    urlParams: ['id'],
  }),
})
