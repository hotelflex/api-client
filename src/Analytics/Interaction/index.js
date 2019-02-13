var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('interactions', {
  search: new Method({
    method: 'GET',
  }),
})
