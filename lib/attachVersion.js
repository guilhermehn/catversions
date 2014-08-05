var fs = require('fs')
  , join = require('path').join

/**
 * Retuns the contents of the `version` file in the format { 'folder': 'version' }
 */
function attachVersion (root, item, cb) {
  fs.readFile(join(root, item, 'version'), 'utf-8', function (err, data) {
    var result = []

    cb = cb.bind(this, err)

    if (data) {
      result[result.length] = item
      result[result.length] = data.replace(/\n/g, '')
      cb = cb.bind(this, result)
    }

    return cb()
  })
}

module.exports = attachVersion
