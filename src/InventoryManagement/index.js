var Entity = require('../Entity');
var DaySlot = require('./DaySlot');
var Reservation = require('./Reservation');
var SystemManager = require('./SystemManager');

module.exports = new Entity('INV', {
  DaySlot: DaySlot,
  Reservation: Reservation,
  SystemManager: SystemManager
});
