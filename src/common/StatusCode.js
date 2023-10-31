const SUCCESS = {
  code: 200,
  message: '请求成功'
}

const FAILED = {
  code: 500,
  message: '系统内部异常'
}

const UNAUTHORIZED = {
  code: 401,
  message: 'token不正确或已过期'
}

const FORBIDDEN = {
  code: 403,
  message: '权限不足'
}

const PARAMETER_ERROR = {
  code: 404,
  message: '传递参数错误'
}

module.exports = {
  SUCCESS,
  FAILED,
  UNAUTHORIZED,
  FORBIDDEN,
  PARAMETER_ERROR
}
