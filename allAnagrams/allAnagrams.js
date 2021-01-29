/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  const allAnas = {};
  const everyStr = [];
  for (let i = 0; i < string.length; i++) {
    everyStr.push(string[i]);
  }
  const makeAna = (currStr, currAna) => {
    if (currAna.length === string.length) {
      allAnas[currAna] = currAna;
      return;
    }
    for (let i = 0; i < currStr.length; i++) {
      const nextStr = currStr.slice();
      nextStr.splice(i, 1);
      const newAna = currAna + currStr[i];
      makeAna(nextStr, newAna);
    }
  }
  makeAna(everyStr, '');
  const result = [];
  for (let anagram in allAnas) {
    result.push(anagram);
  }
  return result;
};

// console.log(allAnagrams('abcdefg'));
