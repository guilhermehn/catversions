var fs = require('fs')
  , join = require('path').join
  , name = 'version'

function hasVersionFile (root, folder, cb) {
  var path = join(root, folder)

  fs.readdir(path, function (err, contents) {
    if (contents.indexOf(name) > -1) {
      fs.stat(join(path, name), function (err, stat) {
        return cb(stat.isFile())
      })
    }
    else {
      return cb(false)
    }
  })
}

module.exports = hasVersionFile
