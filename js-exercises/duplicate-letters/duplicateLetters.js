
function duplicateLetters(...args) {
  var string = args[0]
  var max_occurance_of_character = 1
  while (string.length !== 0) {
    var current_character = string.charAt(0);
    var occurance_of_current_character = 1
    string = remove_character(string, 0)
    for (var j = 0; j < string.length; j++) {
      if (string.charAt(j) === current_character) {
        remove_character(string, j)
        occurance_of_current_character++
      }
    }
    if (occurance_of_current_character > max_occurance_of_character) {
      max_occurance_of_character = occurance_of_current_character
    }
  }
  if (max_occurance_of_character === 1) {
    return false
  }
  return max_occurance_of_character;
}

function remove_character(str, char_pos) {
  var part1 = str.substring(0, char_pos);
  var part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
}

module.exports = {
  duplicateLetters,
};
