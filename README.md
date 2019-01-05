# is-baidu

[![NPM Version](https://img.shields.io/npm/v/is-baidu.svg)](https://www.npmjs.com/package/is-baidu)
[![Build Status](https://travis-ci.org/roccomuso/is-baidu.svg?branch=master)](https://travis-ci.org/roccomuso/is-baidu)
![node](https://img.shields.io/node/v/is-baidu.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Verify that a request is from Baidu crawlers using Baidu's DNS verification steps

You may wish to verify that a web crawler accessing your server is Baidu (or another Baidu user-agent) and not spammers or other bots scraping your site while claiming to be the Baidu crawler. Since you cannot rely on the `User-Agent` header which is easily spoofed, you need to use DNS look up to verify that the IP address belongs to Baidu.


## Install

`npm install --save is-baidu`

## Example

```javascript
const isBaidu = require('is-baidu')

let ip = '123.125.71.87'
isBaidu(ip).then((outcome) => {
  if (outcome) {
    // it's baidu.
  }
}).catch(console.error)
```

### Example with express

```javascript
app.enable('trust proxy')

app.use((req, res, next) => {
  let ip = req.ip || req.connection.remoteAddress
  isBaidu(ip).then(outcome => {
    if (outcome) {
      res.status(404).text('Nothing to scan') // block baidu crawler
    } else {
      next() // it's a user
    }
  })
})
```

## Tests

`npm test`

## License

MIT

## Author

Rocco Musolino [@roccomuso](https://twitter.com/roccomuso)
