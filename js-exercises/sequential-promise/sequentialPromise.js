const sequentialPromise =  promises => {
 let index = 0 

// return  promises[0]().then(x=>promises[1](x)).then(y=>promises[2](y));



 const executePromise = (promise, value) =>{
    if(index === promises.length-1){
      return promise(value)
    }
   return promise(value).then(val => {
            index++
          return  executePromise(promises[index],val)
    })
  }

  return executePromise(promises[0], null)

};
// const p1 = () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('dude');
//   }, 1000);
// });

// const p2 = dude => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(`${dude}, wheres my car`);
//   }, 300);
// });

// const p3 = movieName => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(`${movieName} is a terrible movie`);
//   }, 0);
// });



 export { sequentialPromise };
