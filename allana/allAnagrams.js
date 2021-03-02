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
  if (string.length === 0) {
    return [];
  }
  if (string.length === 1) {
    return [string];
  }
  const finder = (restStr, storeArr) => {
    let container = [];
    if (storeArr.length === 1) {
      container.push(restStr.concat(storeArr[0]));
    } else {
      for (let i = 0; i < storeArr.length; i++) {
        const newStr = restStr.concat(storeArr[i]);
        const newArr = storeArr.slice();
        newArr.splice(i, 1);
        container = container.concat(finder(newStr, newArr));
      }
    }
    return container;
  }
  const storage = [];
  let result = [];
  for (let i = 0; i < string.length; i++) {
    storage.push(string[i])
  }
  for (let i = 0; i < storage.length; i++) {
    const store = storage.slice();
    store.splice(i, 1);
    result = result.concat(finder(string[i], store));
  }
  return result;
};
// allAnagrams('abc');