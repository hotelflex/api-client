var Entity = require('../../Entity')
var Reservation = require('./Reservation')
var SystemManager = require('./SystemManager')

module.exports = new Entity('MEWS', {
  Reservation: Reservation,
  SystemManager: SystemManager,
})
