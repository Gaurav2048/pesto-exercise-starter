
function curry(fn) {
  return function ineerFn(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // eslint-disable-next-line func-names
    return function (...args2) {
      return ineerFn.apply(this, args.concat(args2));
    };
  };
}

module.exports = {
  curry,
};
