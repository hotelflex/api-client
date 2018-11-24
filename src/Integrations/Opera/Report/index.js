var Entity = require('../../../Entity')
var Method = require('../../../Method')

module.exports = new Entity('reports', {
  retrieveLatestByHotel: new Method({
    method: 'GET',
    path: '/retrieveLatestByhotel/{hotelId}',
    urlParams: ['hotelId'],
  }),
})
