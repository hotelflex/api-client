var Entity = require('../Entity');
var RemarketingCampaign = require('./RemarketingCampaign');
var SystemManager = require('./SystemManager');
var Trip = require('./Trip');

module.exports = new Entity('UPG', {
  RemarketingCampaign: RemarketingCampaign,
  SystemManager: SystemManager,
  Trip: Trip
});
