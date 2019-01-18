var Entity = require('../../Entity');
var Method = require('../../Method');
var RoomType = require('./RoomType');

module.exports = new Entity('systemManagers', {
  RoomType: RoomType,
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: [ 'id' ]
  }),
  retrieveByHotel: new Method({
    method: 'GET',
    path: '/retrieveByHotel/{hotelId}',
    urlParams: [ 'hotelId' ]
  }),
  search: new Method({
    method: 'GET'
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup'
  }),
  update: new Method({
    method: 'POST',
    path: '/{id}/update',
    urlParams: [ 'id' ]
  })
});
