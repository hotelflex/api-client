var Entity = require('../../../Entity')
var Method = require('../../../Method')
var Translation = require('./Translation')

module.exports = new Entity('{campaignId}/channels', {
  Translation: Translation,
  activate: new Method({
    method: 'POST',
    path: '{type}/activate',
    urlParams: ['campaignId', 'type'],
  }),
  deactivate: new Method({
    method: 'POST',
    path: '{type}/deactivate',
    urlParams: ['campaignId', 'type'],
  }),
  remove: new Method({
    method: 'POST',
    path: '{type}/remove',
    urlParams: ['campaignId', 'type'],
  }),
  setup: new Method({
    method: 'POST',
    path: 'setup',
    urlParams: ['campaignId'],
  }),
})
