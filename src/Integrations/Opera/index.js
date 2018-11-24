var Entity = require('../../Entity')
var SystemManager = require('./SystemManager')
var Report = require('./Report')

module.exports = new Entity('OPERA', {
  SystemManager: SystemManager,
  Report: Report,
})
