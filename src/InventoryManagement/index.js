var Entity = require('../Entity')
var RoomNight = require('./RoomNight')
var SystemManager = require('./SystemManager')

module.exports = new Entity('INV', {
  RoomNight: RoomNight,
  SystemManager: SystemManager,
})
