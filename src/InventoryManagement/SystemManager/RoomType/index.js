var Entity = require('../../../Entity');
var Method = require('../../../Method');

module.exports = new Entity('{systemManagerId}/roomType', {
  update: new Method({
    method: 'POST',
    path: '/{roomTypeId}/update',
    urlParams: [ 'systemManagerId', 'roomTypeId' ]
  })
});
