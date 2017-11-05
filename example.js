const curry = require('./curry')
const Box = require('./box')
const wrapper = require('./wrapperFn')
const Wrapper = require('./wrapperClass')

const add = (a, b, c) => a + b + c

console.log('Curry:', curry(add)(1, 2, 3))

Box(20)
  .map(i => i + 1)
  .map(i => i * 2)
  .map(i => i - 1)
  .inspect()
  .fold(i => i + 2)

const container = wrapper(39)
console.log('wrapper function:', container.map(i => i + 1))

const Container = new Wrapper(39)
console.log('wrapper class:', Container.map(i => i + 1))
