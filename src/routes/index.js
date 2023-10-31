const express = require('express')
const router = express.Router()

const fs = require('fs')
const path = require('path')

// 自动引入
let routes = []
try {
  const files = fs.readdirSync(__dirname)
  routes = files
    .filter(file => {
      return /\.js$/.test(file) && file !== path.basename(__filename)
    })
    .map(file => file.replace('.js', ''))
} catch {}

routes.forEach(r => {
  router.use('/' + r, require(path.join(__dirname, r)))
})

module.exports = router
