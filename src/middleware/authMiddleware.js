const StatusCode = require('../common/StatusCode')
const { verifyToken } = require('../utils')
const Result = require('../common/Result')

function authMiddleware(req, res, next) {
  // 从请求头中获取token
  const authHeader = req.headers.authorization

  // 不需要拦截的路径
  // 用户登录 注册 管理员登录 上传文件 静态资源
  const whiteList = ['/user/login', '/upload', '/test']

  if (whiteList.includes(req.url)) {
    next()
  }
  // 不需要验证
  const noAuth = req.headers.no_auth
  if (!noAuth && noAuth === 'YES') next()

  if (authHeader) {
    // 取出来token
    const token = authHeader.split(' ')[1]
    const decoded = verifyToken(token)
    if (decoded) {
      // token验证成功
      req.user = decoded
      next()
    } else {
      res.send(Result.fail(StatusCode.UNAUTHORIZED.code, StatusCode.UNAUTHORIZED.message))
    }
  } else {
    res.send(Result.fail(StatusCode.UNAUTHORIZED.code, StatusCode.UNAUTHORIZED.message))
  }
}

module.exports = authMiddleware
