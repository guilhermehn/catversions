var fs = require('fs')
  , lib = require('./')

function versions (dir, cb) {
  var versionDict = {}
    , file

  fs.readdir(dir, function (err, data) {
    if (err) {
      throw err
    }

    data.forEach(function (folder) {
      if (fs.statSync(folder).isDirectory()) {
        if (fs.readdirSync(folder).indexOf('version') > -1) {
          file = folder + '/version'
          if (fs.existsSync(file) && fs.statSync(file).isFile()) {
            versionDict[folder] = fs.readFileSync(file, 'utf-8').replace('\n', '')
          }
        }
      }
    })

    cb(versionDict)
  })
}

module.exports = versions
