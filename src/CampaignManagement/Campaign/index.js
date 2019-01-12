var Entity = require('../../Entity')
var Method = require('../../Method')
var Channel = require('./Channel')
var WebTranslation = require('./WebTranslation')

module.exports = new Entity('campaigns', {
  Channel: Channel,
  WebTranslation: WebTranslation,
  search: new Method({
    method: 'GET',
    path: '/',
  }),
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  retrieveECIBySM: new Method({
    method: 'GET',
    path: '/retrieveECIBySM/{systemManagerId}',
    urlParams: ['systemManagerId'],
  }),
  retrieveLCOBySM: new Method({
    method: 'GET',
    path: '/retrieveLCOBySM/{systemManagerId}',
    urlParams: ['systemManagerId'],
  }),
  retrieveECIByHotel: new Method({
    method: 'GET',
    path: '/retrieveECIByHotel/{hotelId}',
    urlParams: ['hotelId'],
  }),
  retrieveLCOByHotel: new Method({
    method: 'GET',
    path: '/retrieveLCOByHotel/{hotelId}',
    urlParams: ['hotelId'],
  }),
  getInteractions: new Method({
    method: 'GET',
    path: '/{id}/getInteractions',
    urlParams: ['id'],
  }),
  enable: new Method({
    method: 'POST',
    path: '{id}/enable',
    urlParams: ['id'],
  }),
  disable: new Method({
    method: 'POST',
    path: '{id}/disable',
    urlParams: ['id'],
  }),
  update: new Method({
    method: 'POST',
    path: '{id}/update',
    urlParams: ['id'],
  }),
})
