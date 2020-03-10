function flipArgs(func) {
  // eslint-disable-next-line func-names
  return function () {
    // eslint-disable-next-line prefer-rest-params
    func(...Array.from(arguments).reverse());
  };
}

module.exports = {
  flipArgs,
// eslint-disable-next-line semi
}
