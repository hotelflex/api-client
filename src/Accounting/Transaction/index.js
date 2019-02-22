var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('transactions', {
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  search: new Method({
    method: 'GET',
  }),
  cancel: new Method({
    method: 'POST',
    path: '/{id}/cancel',
    urlParams: ['id'],
  }),
})
