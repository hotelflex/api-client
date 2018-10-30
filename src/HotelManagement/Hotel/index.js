var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('hotels', {
  findIdFromRef: new Method({
    method: 'GET',
    path: '/findIdFromRef/{reference}',
    urlParams: [ 'reference' ]
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup'
  }),
  configureIntegration: new Method({
    method: 'POST',
    path: '/{id}/configureIntegration',
    urlParams: [ 'id' ]
  }),
  update: new Method({
    method: 'POST',
    path: '/{id}/update',
    urlParams: [ 'id' ]
  })
});
