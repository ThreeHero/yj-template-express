const config = require('../config/config')

const { appName } = config

/**
 * Token过期时间：10天 864000
 */
const TOKEN_EXPIRE = BigInt(10 * 24 * 60 * 60)

/**
 * Token密钥
 */
const TOKEN_KEY = 'token_key'

/**
 * 数据加密密钥
 */
const DATA_KEY = 'CMYY-' + appName + '-BDLL'

/**
 * 启用状态
 */
const STATUS_ENABLE = true

module.exports = {
  TOKEN_EXPIRE,
  TOKEN_KEY,
  DATA_KEY,
  STATUS_ENABLE
}
