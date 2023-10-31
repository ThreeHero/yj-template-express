// 生成token函数
const jwt = require('jsonwebtoken')
const { TOKEN_KEY, TOKEN_EXPIRE } = require('../common/CommonConst')

function generateToken(user) {
  const payload = { username: user.username, id: user.id }
  const secret = TOKEN_KEY
  const options = { expiresIn: TOKEN_EXPIRE }
  const token = jwt.sign(payload, secret, options)
  return token
}

function verifyToken(token) {
  const secret = TOKEN_KEY
  try {
    const decoded = jwt.verify(token, secret)
    return decoded
  } catch (err) {
    return null
  }
}

module.exports = {
  generateToken,
  verifyToken
}
