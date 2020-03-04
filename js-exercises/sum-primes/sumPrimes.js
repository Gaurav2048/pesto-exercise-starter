function sumPrimes(limits) {
  var sum = 0

  for (var i = 3; i < limits + 1; i++) {
    if (isPrime(i)) {
      sum = sum + i
    }
  }
  return sum+2
}

function isPrime(num) {
  for (var i = 2; i < num ; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export {
  sumPrimes,
};
