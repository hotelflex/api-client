function ApiError(message, statusCode) {
  var instance = new Error(message);
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  instance.statusCode = statusCode
  return instance;
}
ApiError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(ApiError, Error);
} else {
  ApiError.__proto__ = Error;
}

module.exports = ApiError
