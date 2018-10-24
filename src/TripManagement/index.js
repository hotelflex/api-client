var Entity = require('../Entity')
var Campaign = require('./Campaign')
var SystemManager = require('./SystemManager')
var Trip = require('./Trip')

module.exports = new Entity('TRP', {
  Campaign: Campaign,
  SystemManager: SystemManager,
  Trip: Trip,
})
