/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */
// [5, 7, 9, 11,         13, 15, 1, 3]
// 15
var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  // split the array in half
  // check to see if target is bigger than first element of each array
  // pick the array to keep depending on the result above
  // if second half is chosen, keep the length of first half
  // once the target is found, return it's index
  // if target is not found, return null

  const findTarget = (currArr, currIdx) => {
    const midpoint = Math.floor(currArr.length / 2);
    if (currArr.length === 1 && currArr[0] !== target) {
      return null;
    } else if (currArr[0] === target) {
      return currIdx;
    } else if (currArr[0] < currArr[midpoint]) {
      if (currArr[0] < target && currArr[midpoint] > target) {
        return findTarget(currArr.slice(1, midpoint), currIdx + 1);
      } else {
        return findTarget(currArr.slice(midpoint), midpoint + currIdx);
      }
    } else {
      if (currArr[midpoint] <= target && currArr[currArr.length - 1] > target) {
        return findTarget(currArr.slice(midpoint), midpoint + currIdx);
      } else {
        return findTarget(currArr.slice(1, midpoint), currIdx + 1);
      }
    }
  };
  return findTarget(rotated, 0);
};

const a = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
const b = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 6);

console.log(a, " = null & ", b, " = 2");
