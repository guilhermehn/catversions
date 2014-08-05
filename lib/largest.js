function largest (keys) {
  var last = keys.slice().sort(function (a, b) {
    return a.length - b.length
  })[keys.length - 1]

  return last ? last.length : 0
}

module.exports = largest
