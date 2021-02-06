/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  const result = [''];
  const strArr = str.split('').sort();
  const filterDupes = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i === strArr.length - 1) {
      filterDupes.push(strArr[i]);
    } else {
      if (strArr[i] !== strArr[i + 1]) {
        filterDupes.push(strArr[i]);
      }
    }
  }
  const subStr = (currStrArr) => {
    if (currStrArr.length === 0) {
      return;
    }
    const resultLength = result.length;
    for (let i = 0; i < resultLength; i++) {
      result.push(currStrArr[currStrArr.length - 1] + result[i]);
    }
    currStrArr.pop();
    subStr(currStrArr);
  }
  subStr(filterDupes);
  return result;
};

// console.log(powerSet("aaabb"));
