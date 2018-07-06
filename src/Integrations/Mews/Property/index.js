var Entity = require('../../../Entity');
var Method = require('../../../Method');

module.exports = new Entity('properties', {
  create: new Method({
    method: 'POST',
    path: '/create'
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  })
});
