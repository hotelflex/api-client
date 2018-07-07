var Entity = require('../Entity');
var Job = require('./Job');

module.exports = new Entity('CRON', {
  Job: Job
});
