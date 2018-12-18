var Entity = require('../../../Entity')
var Method = require('../../../Method')

module.exports = new Entity('reservations', {
  sync: new Method({
    method: 'POST',
    path: '/sync',
  }),
})
