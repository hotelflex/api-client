var Entity = require('../Entity')
var Report = require('./Report')
var SystemManager = require('./SystemManager')

module.exports = new Entity('ANYL', {
  Report: Report,
  SystemManager: SystemManager,
})
