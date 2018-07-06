var Entity = require('../../Entity');
var Method = require('../../Method');
var Notifications = require('./Notifications');
var PublicConfig = require('./PublicConfig');

module.exports = new Entity('systemManagers', {
  Notifications: Notifications,
  PublicConfig: PublicConfig,
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
  sendDailyReport: new Method({
    method: 'POST',
    path: '/{id}/sendDailyReport',
    urlParams: [ 'id' ]
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup'
  })
});
