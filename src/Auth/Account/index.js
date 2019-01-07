var Entity = require('../../Entity')
var Method = require('../../Method')
var Permission = require('./Permission')

module.exports = new Entity('accounts', {
  Permission: Permission,
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  retrieveByEmail: new Method({
    method: 'GET',
    path: '/retrieveByEmail/{id}',
    urlParams: ['id'],
  }),
  search: new Method({
    method: 'GET',
  }),
  register: new Method({
    method: 'POST',
    path: '/register',
  }),
  setPassword: new Method({
    method: 'POST',
    path: '/{id}/setPassword',
    urlParams: ['id'],
  }),
  activate: new Method({
    method: 'POST',
    path: '/{id}/activate',
    urlParams: ['id'],
  }),
  deactivate: new Method({
    method: 'POST',
    path: '/{id}/deactivate',
    urlParams: ['id'],
  }),
  endSessions: new Method({
    method: 'POST',
    path: '/{id}/endSessions',
    urlParams: ['id'],
  }),
})
