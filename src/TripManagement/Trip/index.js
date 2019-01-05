var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('trips', {
  create: new Method({
    method: 'POST',
    path: '/create',
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  search: new Method({
    method: 'GET',
  }),
  updateArrival: new Method({
    method: 'POST',
    path: '/{id}/updateArrival',
    urlParams: ['id'],
  }),
  updateDeparture: new Method({
    method: 'POST',
    path: '/{id}/updateDeparture',
    urlParams: ['id'],
  }),
  updateGuestInfo: new Method({
    method: 'POST',
    path: '/{id}/updateGuestInfo',
    urlParams: ['id'],
  }),
})
