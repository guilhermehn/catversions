var fs = require('fs')

function isDirectory (item, cb) {
  fs.stat(item, function (err, stat) {
    return cb(stat.isDirectory())
  })
}

module.exports = isDirectory
