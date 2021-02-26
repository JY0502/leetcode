/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  let start = 0;
  let end = matrix.length - 1;
  const spiral = [];
  while (start < end) {
    for (let i = start; i <= end; i++) {
      spiral.push(matrix[start][i]);
    }
    for (let j = start + 1; j <= end; j++) {
      spiral.push(matrix[j][end]);
    }
    for (let k = end - 1; k >= start; k--) {
      spiral.push(matrix[end][k]);
    }
    for (let l = end - 1; l >= start + 1; l--) {
      spiral.push(matrix[l][start]);
    }
    start++;
    end--;
  }
  if (matrix.length % 2 === 1) {
    spiral.push(matrix[start][end]);
  }
  return spiral;
};

console.log(spiralTraversal([
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]))

