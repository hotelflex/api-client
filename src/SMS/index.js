var Entity = require('../Entity');
var Message = require('./Message');
var PhoneNumber = require('./PhoneNumber');
var TrackedMessage = require('./TrackedMessage');

module.exports = new Entity('SMS', {
  Message: Message,
  PhoneNumber: PhoneNumber,
  TrackedMessage: TrackedMessage
});
