function diffArray(...args) {
  
  const ItemFrequencies  = {}
  var unique_item_array = []
  var concated_array = args[0].concat(args[1])
  for(var i =0; i<concated_array.length ; i++){
    var frequency = 0
    if(ItemFrequencies[concated_array[i]]===undefined){
        for(var j =i+1; j<concated_array.length; j++){
            if(concated_array[i]===concated_array[j]){
              frequency ++
            }
        }
        ItemFrequencies[concated_array[i]]=frequency
        if(frequency===0){
          unique_item_array.push(concated_array[i])
        }
    }
  }
  console.log(unique_item_array);
  return unique_item_array

}

module.exports =  {
  diffArray,
};
