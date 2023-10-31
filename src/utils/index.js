const ip = require('./ip')
const jwt = require('./jwtUtils')
const validator = require('./validator')
const tools = require('./tools')

const { generateToken, verifyToken } = jwt
const { isEmail, isMobilePhone, isMD5 } = validator
const { calcPageParams, getRandomColor, md5 } = tools

module.exports = {
  ip,
  generateToken,
  verifyToken,
  isEmail,
  isMobilePhone,
  isMD5,
  calcPageParams,
  getRandomColor,
  md5
}
