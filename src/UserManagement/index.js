var Entity = require('../Entity')
var SystemManager = require('./SystemManager')
var User = require('./User')

module.exports = new Entity('USER', {
  SystemManager: SystemManager,
  User: User,
})
