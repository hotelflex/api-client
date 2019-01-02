var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('systemManagers', {
  setup: new Method({
    method: 'POST',
    path: '/setup',
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  search: new Method({
    method: 'GET',
    path: '/',
  }),
  retrieveByHotel: new Method({
    method: 'POST',
    path: '/retrieveByHotel',
  }),
  fetchInvites: new Method({
    method: 'GET',
    path: '/{id}/fetchInvites',
    urlParams: ['id'],
  }),
  fetchUsers: new Method({
    method: 'GET',
    path: '/{id}/fetchUsers',
    urlParams: ['id'],
  }),
})
