var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('reservations', {
  calculatePrices: new Method({
    method: 'POST',
    path: '/calculatePrices'
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  search: new Method({
    method: 'GET'
  })
});
