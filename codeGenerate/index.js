const dotenv = require('dotenv')
const SequelizeAuto = require('sequelize-auto')
const path = require('path')

dotenv.config()

const options = {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_TYPE,
  directory: path.resolve(process.cwd(), 'src', 'models'), // 存放生成的模型文件的目录
  additional: {
    timestamps: false // 如果不需要时间戳，请设置为false
  }
}

const auto = new SequelizeAuto(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  options
)

auto.run(function (err) {
  if (err) throw err
  console.log('Models generated successfully!')
  // 结束进程
  process.exit()
})
