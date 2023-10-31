const CryptoJS = require('crypto-js')

// 计算分页参数
function calcPageParams(page, pageSize) {
  const offset = (page - 1) * pageSize
  const limit = Number(pageSize)

  return {
    offset,
    limit
  }
}

// 随机颜色
function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// md5加密
function md5(str) {
  return CryptoJS.MD5(str).toString()
}

module.exports = {
  calcPageParams,
  getRandomColor,
  md5
}
