var Entity = require('../Entity');
var Account = require('./Account');
var Session = require('./Session');

module.exports = new Entity('AU', {
  Account: Account,
  Session: Session
});
