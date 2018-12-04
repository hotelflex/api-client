var Entity = require('../../../../Entity')
var Method = require('../../../../Method')

module.exports = new Entity('{type}/translations', {
  update: new Method({
    method: 'POST',
    path: '{lang}/update',
    urlParams: ['campaignId', 'type', 'lang'],
  }),
})
