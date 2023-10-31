const validator = require('validator')

/**
 * 验证邮箱
 * @param {*} email 邮箱字符串
 * @returns true | false
 */
function isEmail(email) {
  return validator.isEmail(email)
}

/**
 * 验证手机号
 * @param {*} phone 手机号字符串
 * @returns true | false
 */
function isMobilePhone(phone) {
  return validator.isMobilePhone(phone)
}

/**
 * 验证是否经过md5加密
 * @param {*} hash md5加密哈希字符串
 * @returns Boolean
 */
function isMD5(hash) {
  return validator.isMD5(hash)
}

module.exports = {
  isEmail,
  isMobilePhone,
  isMD5
}
