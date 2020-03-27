const onChange = (obj, onChangeFn) => {

  const handler = {
    get(target, property, receiver) {
      var value = target[property]
      if(typeof value === 'object' || typeof value === 'function'){
         return new Proxy(value, handler)
      } else {
        return value
      }
    },
    set(target, property, value) {     
      if( typeof target[property] === 'object'){
        return new Proxy(target[property], handler)
      }
      onChangeFn();
      target[property] = value
      return true;
    },
    deleteProperty(target, property) {
      onChangeFn();
      return true;
    }, 
    defineProperty(target, property, descriptor){
      onChangeFn()
      return true
    }, apply(fn, thisArgs, argList){
      return fn(...argList)
    }

  };
return new Proxy(obj, handler);

};

 export { onChange };
