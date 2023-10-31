/**
 * mysql数据库连接
 */

const Sequelize = require('sequelize')
const config = require('./config.js')

// 启用 env
const dotenv = require('dotenv')
dotenv.config()

const { sql_db } = config || {} // 数据库连接信息

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_TYPE,
    logging: false
  }
)

module.exports = {
  sequelize
}
