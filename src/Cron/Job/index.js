var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('jobs', {
  pause: new Method({
    method: 'POST',
    path: '/{id}/pause',
    urlParams: [ 'id' ]
  }),
  pauseByRef: new Method({
    method: 'POST',
    path: '/pauseByRef'
  }),
  resume: new Method({
    method: 'POST',
    path: '/{id}/resume',
    urlParams: [ 'id' ]
  }),
  resumeByRef: new Method({
    method: 'POST',
    path: '/resumeByRef'
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  schedule: new Method({
    method: 'POST',
    path: '/schedule'
  }),
  search: new Method({
    method: 'GET'
  })
});
