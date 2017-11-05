class Wrapper {
  constructor(value) {
    this.value = value
  }
  map(f) {
    return new Wrapper(f(this.value))
  }
}

module.exports = Wrapper
