const sumEvenArgs = (...args) => {
  var sum = 0
  for(var i =0; i<args.length; i++){
    args[i]%2===0?sum+=args[i]:null
  }
  return sum;
};

export { sumEvenArgs };
