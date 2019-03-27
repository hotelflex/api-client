var Entity = require('../Entity')
var Block = require('./Block')
var DaySlot = require('./DaySlot')
var RoomNight = require('./RoomNight')
var SystemManager = require('./SystemManager')

module.exports = new Entity('INV', {
  Block: Block,
  DaySlot: DaySlot,
  RoomNight: RoomNight,
  SystemManager: SystemManager,
})
