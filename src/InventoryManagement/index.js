var Entity = require('../Entity');
var Reservation = require('./Reservation');
var SystemManager = require('./SystemManager');

module.exports = new Entity('INV', {
  Reservation: Reservation,
  SystemManager: SystemManager
});
