const statusCode = require('./StatusCode')

function success(data) {
  return {
    code: statusCode.SUCCESS.code,
    message: statusCode.SUCCESS.message,
    data
  }
}

function fail(code, message) {
  return {
    code,
    message,
    data: null
  }
}

module.exports = {
  success,
  fail
}
