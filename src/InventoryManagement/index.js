var Entity = require('../Entity')
var Block = require('./Block')
var DaySlot = require('./DaySlot')
var Reservation = require('./Reservation')
var SystemManager = require('./SystemManager')

module.exports = new Entity('INV', {
  Block: Block,
  DaySlot: DaySlot,
  Reservation: Reservation,
  SystemManager: SystemManager,
})
