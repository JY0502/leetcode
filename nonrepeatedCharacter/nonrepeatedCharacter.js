/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  string = string.toUpperCase();
  const charStorage = {};
  for (let i = 0; i < string.length; i++) {
    if (charStorage[string[i]]) {
      charStorage[string[i]]++;
    } else {
      charStorage[string[i]] = 1;
    }
  }
  for (let char in charStorage) {
    if (charStorage[char] === 1) {
      return char;
    }
  }
  return null;
};
