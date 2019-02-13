var Entity = require('../Entity')
var SystemManager = require('./SystemManager')
var Interaction = require('./Interaction')

module.exports = new Entity('ANYL', {
  SystemManager: SystemManager,
  Interaction: Interaction,
})
