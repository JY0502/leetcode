/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// var rockPaperScissors = function(n) {
//   // TODO: your solution here
//   //if n is not given, replace it to 3
//   n = n || 3;
//   //make an empty array variable to keep all the combinations
//   let store = [];
//   //make a set of all the possible choices
//   const options = ['R', 'P', 'S'];
//   //create a recursive function that will handle to make combinations
//   const makeCombinations = function(roundsLeft) {
//     //proceed only if input number is bigger than 0;
//     // console.log(roundsLeft);
//     if (roundsLeft > 0) {
//       if (store.length === 0) {
//         store = options;
//       } else {
//         const tempStore = [];
//         for (let i = 0; i < store.length; i++) {
//           for (let option of options) {
//             tempStore.push(store[i] + option);
//             // console.log(store);
//           }
//         }
//         store = tempStore;
//       }
//       makeCombinations(roundsLeft - 1);
//     }
//   };
//   //invoke the recurisve function with the given input
//   makeCombinations(n);
//   //return the array with all the possible combinations
//   return store;
// };

var rockPaperScissors = function (n) {
  // make RPS array
  let rps = ["R", "P", "S"];
  // make result array
  let result = [];
  /*iterate through RPS array*/
  //3 * 1 = 3 // 3 * 3 * 3 = 27
  // recurse each item in RPS array
  if (n <= 0) {
    return result;
  }
  n = n || 3;
  //recursive function (n: in one number which represents the index number of the RPS array)
  let findThrow = function (currentString) {
    //base case: if the storage for one throw is full, push the storage to the result array
    // console.log(counter)
    // console.log(oneThrow)
    if (currentString.length === n) {
      result.push(currentString);
      return;
    }
    // //recurse: add the rps array [current index] to the storage for one
    // // increment num
    // num++;
    //run the recursive function(n)
    for (let i = 0; i < 3; i++) {
      newString = currentString + rps[i]
      findThrow(newString);
    }
  }
  //initiate the recursive function with 0
  findThrow("");
  //return solution
  return result;
};
// var result1 = rockPaperScissors(-1)
// console.log('result for -1', result1)
// var result2 = rockPaperScissors(0)
// console.log('result for 0', result2)
// var result3 = rockPaperScissors(5)
// console.log('result for 5', result3)
