function sumAll(limits) {

  var sum = 0
  var start_count = limits[0]
  var end_limit = limits[1]
  if (limits[0] > limits[1]) {
    start_count = limits[1]
    end_limit = limits[0]
  }
  for (var i = start_count; i < end_limit + 1; i++) {
    sum = sum + i
  }
  return sum
}

module.exports = {
  sumAll,
};
