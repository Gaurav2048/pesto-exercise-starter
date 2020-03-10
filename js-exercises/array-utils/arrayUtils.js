
Array.prototype.myforEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i])
  }
}

function NewForEachImpl(arr) {
  var sum = 0
  arr.myforEach(item => {
    sum += item
  })
  return sum
}

Array.prototype.newMap = function (fn) {
  for (var i = 0; i < this.length; i++) {
    this[i] = fn(this[i])
  }
  return this
}

function NewMapImpl(arr) {
  return arr.newMap(x10)
}

function x10(val) {
  return val * 10
}

Array.prototype.myFilter = function (fn) {
  var arr = []
  for (var i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      arr.push(this[i])
    }
  }
  return arr
}

function MyFilterImpl(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  var avg = sum / arr.length

  var new_arr = arr.myFilter(function (item) {
    return item > avg
  })
  return new_arr
}

Array.prototype.myReduce = function (fn, init) {
  for (var i = 0; i < this.length; i++) {
    init = fn(this[i], init)
  }
  return init
}

function MyReduceImpl(arr, init) {
  let result = arr.myReduce((i, val) => {
    return i + val
  }, init)
  console.log(result);
  return result
}


// MyReduceImpl([1,2,3,4,5,6,7,3], 3000)

//MyFilterImpl([1,2,3,4,5,6,7])





//NewForEach([2,5,1,3,5])

module.exports = {
  NewForEachImpl,
  NewMapImpl,
  MyFilterImpl,
  MyReduceImpl,
}