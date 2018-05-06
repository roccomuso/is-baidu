const dns = require('dns')

function isBaidu (ip) {
  return new Promise((resolve, reject) => {
    dns.reverse(ip, (err, domains) => {
      if (err) {
        return reject(err)
      }
      const hostname = domains[0]
      if (hostname.endsWith('.crawl.baidu.com')) {
        return resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

module.exports = isBaidu
