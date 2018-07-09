var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('trackedMessages', {
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  }),
  send: new Method({
    method: 'POST',
    path: '/send'
  })
});
