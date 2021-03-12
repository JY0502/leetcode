/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function (array) {
  array.sort((a, b) => {
    if (Math.abs(b) - Math.abs(a) === 0) {
      return b - a;
    } else {
      return Math.abs(b) - Math.abs(a);
    }
  });
  if (array[0] * array[1] * array[2] >= 0 || array.length === 3) {
    return array[0] * array[1] * array[2];
  }
  const positive = [];
  const negative = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positive.push(array[i]);
      if (positive.length > 3) {
        break;
      }
    } else {
      negative.push(array[i]);
    }
  }
  let largest = 0;
  if (positive.length > 1) {
    largest = positive[0] * positive[1] * positive[2];
  }
  if (negative[0] * negative[1] * positive[0] > largest) {
    largest = negative[0] * negative[1] * positive[0];
  }
  return largest;
};
// 864577350
console.log(
  largestProductOfThree([
    174,
    -524,
    -624,
    903,
    982,
    -219,
    126,
    876,
    -875,
    -617,
    -495,
    -621,
    194,
    -333,
    804,
    -199,
    -916,
    -88,
    -706,
    562,
    -293,
    -876,
    -697,
    975,
    -6,
    197,
    544,
    -919,
    -487,
    432,
    -849,
    512,
    619,
    44,
    252,
    -388,
    -177,
    -256,
    -847,
    -206,
    114,
    116,
    -827,
    518,
    -511,
    -511,
    257,
    -630,
    56,
    706,
    675,
    -705,
    -211,
    170,
    -13,
    684,
    836,
    -708,
    336,
    728,
    511,
    -229,
    -403,
    310,
    206,
    539,
    784,
    666,
    506,
    -252,
    -34,
    709,
    233,
    -290,
    633,
    29,
    -550,
    -412,
    -778,
    -107,
    -123,
    724,
    -58,
    -97,
    71,
    776,
    104,
    207,
    -381,
    -132,
    88,
    312,
    -39,
    478,
    -817,
    -484,
    -929,
    651,
    434,
    -911,
  ])
);
