var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('links', {
  create: new Method({
    method: 'POST',
    path: '/create'
  }),
  generateViewerData: new Method({
    method: 'POST',
    path: '/{id}/generateViewerData',
    urlParams: [ 'id' ]
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
