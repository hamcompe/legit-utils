function Box(x) {
  return {
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: f => {
      console.log(`Box(${x})`)
      return Box(x)
    }
  }
}

module.exports = Box
