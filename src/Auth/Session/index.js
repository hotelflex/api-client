var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('sessions', {
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  }),
  start: new Method({
    method: 'POST',
    path: '/start'
  }),
  validate: new Method({
    method: 'POST',
    path: '/validate'
  }),
  end: new Method({
    method: 'POST',
    path: '/{id}/end',
    urlParams: [ 'id' ]
  })
});
