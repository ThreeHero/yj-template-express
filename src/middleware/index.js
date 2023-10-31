/**
 * 使用中间件
 */

const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const authMiddleware = require('./authMiddleware')
const errorMiddleware = require('./errorMiddleware')
const routes = require('../routes')

function useMiddleware(app) {
  app.use(cors()) // 解决跨域问题

  // 解析json数据
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use('/upload', express.static(path.join(__dirname, '../../public')))

  // 拦截器
  app.use(authMiddleware)

  // 配置路由
  app.use('/', routes)

  // 全局错误处理
  app.use(errorMiddleware)
}

module.exports = useMiddleware
