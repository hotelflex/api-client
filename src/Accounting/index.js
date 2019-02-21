var Entity = require('../Entity')
var SystemManager = require('./SystemManager')
var Transaction = require('./Transaction')
var Invoice = require('./Invoice')

module.exports = new Entity('ACC', {
  SystemManager: SystemManager,
  Transaction: Transaction,
  Invoice: Invoice,
})
