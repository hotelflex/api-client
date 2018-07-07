var Entity = require('../../Entity');
var Method = require('../../Method');

module.exports = new Entity('phoneNumbers', {
  isValid: new Method({
    method: 'POST',
    path: '/isValid'
  }),
});
