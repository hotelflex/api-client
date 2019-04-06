var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('roomNights', {
  getAvailability: new Method({
    method: 'GET',
    path: '/getAvailability',
  }),
});
