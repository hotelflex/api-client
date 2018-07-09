var Entity = require('../Entity');
var TrackedMessage = require('./TrackedMessage');

module.exports = new Entity('SMS', {
  TrackedMessage: TrackedMessage
});
