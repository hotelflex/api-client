var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('outbounds', {
  send: new Method({
    method: 'POST',
    path: '/send'
  })
});
