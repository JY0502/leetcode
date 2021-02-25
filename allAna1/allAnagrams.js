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

var allAnagrams = function (string) {
  const anagrams = {};
  const allAna = [];
  const findAna = (leftStr, currAna) => {
    if (leftStr.length === 0) {
      if (!anagrams[currAna]) {
        allAna.push(currAna);
      }
      anagrams[currAna] = currAna;
    } else {
      for (let i = 0; i < leftStr.length; i++) {
        const nextStr = leftStr.slice(0, i) + leftStr.slice(i + 1);
        const nextAna = currAna + leftStr[i];
        findAna(nextStr, nextAna);
      }
    }
  };
  findAna(string, "");
  return allAna;
};
var anagrams = allAnagrams("aaaabc");
console.log(anagrams);
