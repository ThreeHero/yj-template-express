const Result = require('../common/Result')
const StatusCode = require('../common/StatusCode')
const chalk = require('chalk')

/**
 * 全局错误处理中间件
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

function errorMiddleware(err, req, res, next) {
  console.error(chalk.red(err))
  res.send(Result.fail(StatusCode.FAILED.code, StatusCode.FAILED.message))
}

module.exports = errorMiddleware
