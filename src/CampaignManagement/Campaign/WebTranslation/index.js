var Entity = require('../../../Entity')
var Method = require('../../../Method')

module.exports = new Entity('{campaignId}/webTranslations', {
  update: new Method({
    method: 'POST',
    path: '{lang}/update',
    urlParams: ['campaignId', 'lang'],
  }),
})
