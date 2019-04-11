var Entity = require('../../../Entity')
var Method = require('../../../Method')

module.exports = new Entity('{id}/notifications', {
  enable: new Method({
    method: 'POST',
    path: '/enable',
    urlParams: ['id'],
  }),
  disable: new Method({
    method: 'POST',
    path: '/disable',
    urlParams: ['id'],
  }),
  update: new Method({
    method: 'POST',
    path: '/update',
    urlParams: ['id'],
  }),
})
