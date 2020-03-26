class Cycled {

  constructor(_array) {
    this._array = _array
    this.index = 0
  }

  [Symbol.iterator](){
    var next = this.current()
    return {
      next(){
        return {value: next, done: true}
      }
    }
  }

  next() {
    if (this.index === this._array.length-1) {
      this.index = 0
    } else {
      this.index = this.index + 1
    }
    return this._array[this.index]
  }

  current() {
    return this._array[this.index]
  }

  previous() {
    if (this.index !== 0) {
      this.index = this.index - 1
    }else {
      this.index = this._array.length - 1
    }
    return this._array[this.index]
  }

 static index() {
   return 22
 }

  step(val){
    this.index += val
    this.index > this._array.length ? this.index = this._array.length - this.index - 1 : null
    this.index < 0 ? this.index = this._array.length + this.index -1 : null 
    return this._array[this.index]
  }

}

const fixture = [1, 2, 3]; 
const c = new Cycled(fixture);
console.log([...c]);

module.exports = { Cycled }
