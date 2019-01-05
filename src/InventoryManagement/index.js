var Entity = require('../Entity')
var Block = require('./Block')
var DaySlot = require('./DaySlot')
var SystemManager = require('./SystemManager')

module.exports = new Entity('INV', {
  Block: Block,
  DaySlot: DaySlot,
  SystemManager: SystemManager,
})
