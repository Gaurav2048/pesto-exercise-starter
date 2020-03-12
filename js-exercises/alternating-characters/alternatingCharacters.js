function alternatingCharacters(arr) {
  const delete_counts = []
  arr.forEach(element => {
    var num_char_deleted = 0
    var position = 0
    for (let i = 1; i < element.length; i++) {
      if (element[position] === element[i]) num_char_deleted++
      else position = i
    }
    delete_counts.push(num_char_deleted)
  });
  return delete_counts
}

//alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'])

export { alternatingCharacters };
