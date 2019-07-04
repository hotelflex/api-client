var Entity = require('../../../Entity')
var Method = require('../../../Method')

module.exports = new Entity('integrations', {
  search: new Method({
    method: 'GET',
    path: '/',
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/:id',
    urlParams: ['id'],
  }),
  create: new Method({
    method: 'POST',
    path: '/',
  }),
  update: new Method({
    method: 'POST',
    path: '/:id',
  }),
  requestEmailId: new Method({
    method: 'POST',
    path: '/:id/requestEmailId',
  }),
})
