var Entity = require('../../Entity')
var SystemManager = require('./SystemManager')

module.exports = new Entity('OPERA', {
  SystemManager: SystemManager,
})
