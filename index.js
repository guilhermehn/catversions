var fs = require('fs')
  , async = require('async')
  , lib = require('./lib')
  , thunkify = require('thunkify')
  , util = require('util')
  , stat = thunkify(fs.stat)

function catversions (dir, cb) {
  var versions = {}

  fs.readdir(dir, function (err, data) {
    if (err) cb(err, data)

    async.filter(data, lib.isDirectory, function (folders) {
      async.filter(folders, lib.hasVersionFile, function (projectFolders) {
        var versionPath = projectFolders.map(function (folder) {
          return folder + '/version'
        })

        async.map(versionPath, lib.attachVersion, function (err, result) {
          if (err) {
            cb(err)
            return
          }

          result.forEach(function (file) {
            Object
              .keys(file)
              .forEach(function (key) {
                versions[key] = file[key]
              })
          })

          cb(null, versions)
        })
      })
    })
  })
}

module.exports = catversions
