var fs = require('fs')

function attachVersion (item, cb) {
  fs.readFile(item, 'utf-8', function (err, data) {
    var result = {}

    cb = cb.bind(this, err)

    if (data) {
      result[item.split('/')[0]] = data.replace(/\n/g, '')
      cb = cb.bind(this, result)
    }

    return cb()
  })
}

module.exports = attachVersion
