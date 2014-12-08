var fs = require('fs');
var join = require('path').join;

function isDirectory (root, item, cb) {
  fs.stat(join(root, item), function (err, stat) {
    if (err) {
      throw err;
    }

    return cb(stat.isDirectory());
  });
}

module.exports = isDirectory;
