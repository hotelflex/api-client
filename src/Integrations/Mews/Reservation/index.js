var Entity = require('../../../Entity');
var Method = require('../../../Method');

module.exports = new Entity('reservations', {
  create: new Method({
    method: 'POST',
    path: '/create'
  }),
  processTripChangeRequestSucceeded: new Method({
    method: 'POST',
    path: '/processTripChangeRequestSucceeded'
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  }),
  sync: new Method({
    method: 'POST',
    path: '/sync'
  })
});
