var largest = require('./largest')
  , whitespace = require('./whitespace')

function rightPadding (keys) {
  var l = largest(keys)

  return function (key) {
    return key + whitespace(1 + l - key.length)
  }
}

module.exports = rightPadding
