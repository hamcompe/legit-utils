const curry = fn =>
  (args, ...restArgs) =>
    (restArgs.length + 1 >= fn.length) ?
      fn(args, ...restArgs) :
      curry(fn.bind(null, args, ...restArgs))

module.exports = curry

/**
 * Usage:
 *
 * const add = (a, b, c) => a + b + c
 * const curriedAdd = curry(add)
 *
 * add(1,2,3)
 * // => 6
 *
 * curriedAdd(1,2,3)
 * // => 6
 *
 * curriedAdd(1)(2)(3)
 * // => 6
 *
 * curriedAdd(1,2)(3)
 * // => 6
*/
