var Entity = require('../Entity')
var SystemManager = require('./SystemManager')
var Transaction = require('./Transaction')

module.exports = new Entity('ACC', {
  SystemManager: SystemManager,
  Transaction: Transaction,
})
