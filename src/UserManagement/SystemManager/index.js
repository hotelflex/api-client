var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('systemManagers', {
  setup: new Method({
    method: 'POST',
    path: '/setup',
  }),
})
