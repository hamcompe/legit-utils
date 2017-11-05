function wrapper(val) {
  return {
    value: val,
    map: f => wrapper(f(val))
  }
}

module.exports = wrapper
