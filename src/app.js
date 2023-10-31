/**
 * 启动包
 */
const express = require('express')
const chalk = require('chalk')
const dotenv = require('dotenv')

const { sequelize } = require('./config/database')
const { ip: ipAddress } = require('./utils')

const useMiddleWare = require('./middleware')

dotenv.config()

const app = express()

useMiddleWare(app)

sequelize
  .authenticate()
  .then(() => {
    // 数据库连接成功时执行
    app.listen(process.env.APP_PORT, () => {
      // 服务启动时候执行
      console.info(chalk.blue('服务本地启动于'), chalk.greenBright(`http://127.0.0.1:${process.env.APP_PORT}`))
      console.info(chalk.blue('服务局域网启动于'), chalk.greenBright(`http://${ipAddress}:${process.env.APP_PORT}`))
    })
  })
  .catch(err => {
    // 数据库连接失败时执行
    console.error(chalk.red('数据库连接失败 ' + err))
  })
