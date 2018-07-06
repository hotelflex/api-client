function Method(_opts) {
  var opts = _opts || {};
  this.method = opts.method;
  this.path = opts.path || '';
  this.urlParams = opts.urlParams || [];
  // TODO: perform validation on args
};

module.exports = Method;
