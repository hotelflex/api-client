var Entity = require('../../Entity');
var Customer = require('./Customer');
var Property = require('./Property');
var Reservation = require('./Reservation');
var SystemManager = require('./SystemManager');

module.exports = new Entity('MEWS', {
  Customer: Customer,
  Property: Property,
  Reservation: Reservation,
  SystemManager: SystemManager
});
