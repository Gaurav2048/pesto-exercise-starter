
function freqSort(...args) {
  
  const letterArray = args[0]
  if(letterArray===[]) return []
  var frequencies = {}
  let index = 0;
  
  while (letterArray[index] !== undefined) {
    if (frequencies[letterArray[index]] !== undefined) {
      frequencies[letterArray[index]] += 1
    } else {
      frequencies[letterArray[index]] = 1
    }
    index++;
  } 
  const frequencyArray = Object.entries(frequencies);
  frequencyArray.sort((a, b) => {
    return b[1] - a[1]
  });  
  frequencies = Object.fromEntries(frequencyArray)
    
  return Object.keys(frequencies);
}
 
export {
  freqSort,
};
