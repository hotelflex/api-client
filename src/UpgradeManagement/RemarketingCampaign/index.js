var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('remarketingCampaigns', {
  calcStatsGlobal: new Method({
    method: 'POST',
    path: '/calcStatsGlobal',
  }),
  calcStats: new Method({
    method: 'POST',
    path: '/{id}/calcStats',
    urlParams: [ 'id' ]
  }),
  create: new Method({
    method: 'POST',
    path: '/create'
  }),
  disable: new Method({
    method: 'POST',
    path: '/{id}/disable',
    urlParams: [ 'id' ]
  }),
  enable: new Method({
    method: 'POST',
    path: '/{id}/enable',
    urlParams: [ 'id' ]
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  }),
  updateConfig: new Method({
    method: 'POST',
    path: '/{id}/updateConfig',
    urlParams: [ 'id' ]
  }),
});
