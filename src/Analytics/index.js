var Entity = require('../Entity')
var SystemManager = require('./SystemManager')

module.exports = new Entity('ANYL', {
  SystemManager: SystemManager,
})
