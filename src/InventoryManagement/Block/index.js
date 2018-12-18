var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('blocks', {
  peek: new Method({
    method: 'POST',
    path: '/peek',
  }),
})
