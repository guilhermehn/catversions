var fs = require('fs')

function hasVersionFile (folder, cb) {
  fs.readdir(folder, function (err, contents) {
    if (contents.indexOf('version') > -1) {
      fs.stat(folder + '/version', function (err, stat) {
        return cb(stat.isFile())
      })
    }
    else {
      return cb(false)
    }
  })
}

module.exports = hasVersionFile
