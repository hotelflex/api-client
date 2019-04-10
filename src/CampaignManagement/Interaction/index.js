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
    method: 'GET',
    path: '/fetchBookingAppData/{shortId}',
    urlParams: ['shortId'],
  }),
  fetchBookingStage: new Method({
    method: 'GET',
    path: '/fetchBookingStage/{shortId}',
    urlParams: ['shortId'],
  }),
  reserve: new Method({
    method: 'POST',
    path: '/{id}/reserve',
    urlParams: ['id'],
  }),
})
