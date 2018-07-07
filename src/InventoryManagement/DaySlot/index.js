var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('daySlots', {
  release: new Method({
    method: 'POST',
    path: '/release'
  }),
  reserve: new Method({
    method: 'POST',
    path: '/reserve'
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  }),
  update: new Method({
    method: 'POST',
    path: '/update'
  })
});
