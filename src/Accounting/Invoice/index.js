var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('invoices', {
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  retrieveByNumber: new Method({
    method: 'GET',
    path: '/retrieveByNumber/{invoiceNumber}',
    urlParams: ['invoiceNumber'],
  }),
  search: new Method({
    method: 'GET',
  }),
  create: new Method({
    method: 'POST',
    path: '/create',
  }),
  cancelTransactions: new Method({
    method: 'POST',
    path: '/{id}/cancelTransactions',
    urlParams: ['id'],
  }),
  send: new Method({
    method: 'POST',
    path: '/{id}/send',
    urlParams: ['id'],
  }),
})
