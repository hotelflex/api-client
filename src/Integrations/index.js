var Entity = require('../Entity');
var Mews = require('./Mews');
var Opera = require('./Opera');

module.exports = new Entity('INT', {
  Mews: Mews,
  Opera: Opera
});
