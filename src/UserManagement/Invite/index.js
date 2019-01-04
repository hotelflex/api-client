var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('invites', {
  create: new Method({
    method: 'POST',
    path: '/create',
  }),
  verify: new Method({
    method: 'POST',
    path: '/{id}/verify',
    urlParams: ['id'],
  }),
  cancel: new Method({
    method: 'POST',
    path: '/{id}/cancel',
    urlParams: ['id'],
  }),
})
