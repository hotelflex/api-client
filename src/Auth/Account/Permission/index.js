var Entity = require('../../../Entity');
var Method = require('../../../Method');

module.exports = new Entity('{accountId}/permissions', {
  add: new Method({
    method: 'POST',
    path: '/add',
    urlParams: [ 'accountId' ]
  }),
  remove: new Method({
    method: 'POST',
    path: '/{permissionId}/remove',
    urlParams: [ 'accountId', 'permissionId' ]
  }),
});
