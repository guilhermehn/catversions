var largest = require('./largest')
  , whitespace = require('./whitespace')

function leftPadding (keys) {
  var l = largest(keys)

  return function (key) {
    return whitespace(1 + l - key.length) + key
  }
}

module.exports = leftPadding
