var Entity = require('../Entity')
var Campaign = require('./Campaign')
var Interaction = require('./Interaction')
var SystemManager = require('./SystemManager')

module.exports = new Entity('CMPN', {
  Campaign: Campaign,
  Interaction: Interaction,
  SystemManager: SystemManager,
})
