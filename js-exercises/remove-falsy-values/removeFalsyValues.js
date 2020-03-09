
function removeFalsyValues(array) {
  return array.filter((item) => {
    if (typeof (item) !== 'string') {
      return !isNaN(item) && item !== false && item !== undefined && item !== 0 && item !== null 
    }
    return   item !== '' 
  })
}

console.log(removeFalsyValues([false, null, 0, NaN, undefined, '']));
;

export {
  removeFalsyValues,
};
