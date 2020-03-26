const fibonacciIter = {
  first: 1,
  second: 2,
  [Symbol.iterator]() {
    let limit = 0;
    const context = this;
    return {
      next() {
        if (limit < 20) {
          if (limit === 0) {
            limit++
            return { value: context.first, done: false }
          }
          if (limit === 1) {
            limit++
            return { value: context.second, done: false }
          }
          limit++
          var value = context.first + context.second
          context.first = context.second
          context.second = value
          return { value, done: false }
        } else {
          return { done: true }
        }
      }
    }
  },
}


export { fibonacciIter };