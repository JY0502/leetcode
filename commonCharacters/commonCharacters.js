/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function() {
  // TODO: Your code here!
  const container = {};
  let result = '';
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (i === 0) {
        if (!container[arguments[i][j]]) {
          container[arguments[i][j]] = 1;
        }
      } else {
        if (container[arguments[i][j]] === i) {
          container[arguments[i][j]]++;
        }
      }
    }
  }
  for (let key in container) {
    if (container[key] === arguments.length && key !== ' ') {
      result += key;
    }
  }
  return result;
};

console.log(commonCharacters('acexivou', 'aegihobu'));