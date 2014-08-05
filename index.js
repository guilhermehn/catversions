/**
 * Dependencies
 */

var fs = require('fs')
  , async = require('async')
  , lib = require('./lib')

/**
 * Main function
 */

function catversions (root, cb) {

  // Read the root folder
  fs.readdir(root, function (err, data) {

    // Pass error to callback
    if (err) cb(err, null)

    // Add path delimiter if there's none
    if (root.indexOf(/\/$/) === -1) {
      root += '/'
    }

    // Filter for directories
    async.filter(data, lib.isDirectory.bind(this, root), function (folders) {

      // Filter for directories with version file inside
      async.filter(folders, lib.hasVersionFile.bind(this, root), function (projectFolders) {

        // Read version files
        async.map(projectFolders, lib.attachVersion.bind(this, root), function (err, result) {

          // Pass error to callback
          if (err) {
            cb(err, null)
            return
          }

          // `Folder -> Version` hash
          var versions = {}

          result.forEach(function (file) {
            versions[file[0]] = file[1]
          })

          cb(null, versions)
        })
      })
    })
  })
}

/**
 * Exports
 */

module.exports = catversions
