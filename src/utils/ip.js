const os = require('os')

// 获取ip地址
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces()
  for (const interfaceName in interfaces) {
    const inter = interfaces[interfaceName]
    for (const iface of inter) {
      // 只获取IPv4地址，跳过IPv6地址和回环地址
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return '127.0.0.1'
}

const ip = getLocalIpAddress()

module.exports = ip
