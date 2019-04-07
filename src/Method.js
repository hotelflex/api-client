function Method(_opts) {
  var opts = _opts || {};
  this.method = opts.method;
  this.path = opts.path || '';
  this.urlParams = opts.urlParams || [];
  this.customHeaders = opts.customHeaders || {};
  // TODO: perform validation on args
};

module.exports = Method;
