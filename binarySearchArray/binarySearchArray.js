/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  const last = array.length - 1;
  if (array[last] < target || array[0] > target) {
    return null;
  }
  const indexSearch = (left, right) => {
    if (left > right) {
      return null;
    }
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      return indexSearch(left, mid - 1);
    } else {
      return indexSearch(mid + 1, right);
    }
  }
  return indexSearch(0, last);
};

// index = binarySearch([1, 2, 3, 14, 15], 4);
// console.log(index);