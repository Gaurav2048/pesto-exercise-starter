
function curry(fn){
 
 return function fn_2(x){
   return function fn_3(y){
      return fn(x,y)
    }
  }
}
const add = curry((a, b) => {
  return a + b;
});

console.log(add(1)(2));


// export {
//   curry,
// };
