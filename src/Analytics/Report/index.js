var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('reports', {
  retrieveForHotel: new Method({
    method: 'GET',
    path: '/retrieveForHotel/{hotelId}',
    urlParams: ['hotelId'],
  }),
  retrieveForPlatform: new Method({
    method: 'GET',
    path: '/retrieveForPlatform',
  }),
  generateForHotel: new Method({
    method: 'GET',
    path: '/generateForHotel',
  }),
  generateForPlatform: new Method({
    method: 'GET',
    path: '/generateForPlatform',
  }),
})
