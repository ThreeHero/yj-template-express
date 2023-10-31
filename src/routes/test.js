const express = require('express')
const router = express.Router()

router.all('/', async (req, res) => {
  res.send('1')
})

module.exports = router
