var Entity = require('../Entity')
var SystemManager = require('./SystemManager')
var User = require('./User')
var Invite = require('./Invite')

module.exports = new Entity('USER', {
  SystemManager: SystemManager,
  User: User,
  Invite: Invite,
})
