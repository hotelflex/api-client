var Entity = require('../../../Entity');
var Method = require('../../../Method');

module.exports = new Entity('/publicConfig', {
  retrieveByHotel: new Method({
    method: 'GET',
    path: '/retrieveByHotel/{hotelId}',
    urlParams: [ 'hotelId' ]
  })
});
