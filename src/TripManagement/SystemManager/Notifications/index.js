var Entity = require('../../../Entity')
var Method = require('../../../Method')

module.exports = new Entity('{id}/notifications', {
  disable: new Method({
    method: 'POST',
    path: '/disable',
    urlParams: ['id'],
  }),
  enable: new Method({
    method: 'POST',
    path: '/enable',
    urlParams: ['id'],
  }),
  update: new Method({
    method: 'POST',
    path: '/update',
    urlParams: ['id'],
  }),
})
