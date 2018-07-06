var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('trips', {
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
  }),
  updateTimes: new Method({
    method: 'POST',
    path: '/{id}/updateTimes',
    urlParams: [ 'id' ]
  })
});
