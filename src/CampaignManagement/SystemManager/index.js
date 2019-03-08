var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('systemManagers', {
  search: new Method({
    method: 'GET',
    path: '/',
  }),
  setup: new Method({
    method: 'POST',
    path: '/setup',
  }),
  updateByHotel: new Method({
    method: 'POST',
    path: '/updateByHotel',
  }),
})
