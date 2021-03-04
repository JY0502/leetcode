/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 15. 3Sum: https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums
such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

NOTE: This is an essential interview prompt, one which allows you to
demonstrate your ability to reduce time complexity. Solve this in whatever
way you are able to today, using "brute force" (ignoring efficiency) if necessary.
We will revisit this problem later in JSP, after re/learning algorithms that will
help you approach this problem with time complexity in mind.

In Leetcode, the solution is locked for Premium subscribers. We will Slack a solution
link 15 minutes before the end of the pair module so you and your partner can
review the solution together.

*/

//three nested for loops to find three numbers add to 0
//store them in an array
//return the array

// var threeSum = function(nums) {
const combination = [];
for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      if (i + j + k === 0) {
        combination.push([i, j, k]);
      }
    }
  }
}
return combination;
// };

//a + b + c === 0;
//a + b === 0 - c

// [1, 2, 3, 4, 5]  4
// sort the nums (small to big)
// for loop the sorted nums and have a value equal to 0 - c
// another for loop to have left and right pointer
// move the pointer as needed to find combination that adds to 0 - c
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const combination = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let c = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] === c) {
        combination.push([nums[i], nums[left], nums[right]]);
      } else if (nums[left] + nums[right] < c) {
        right--;
      } else {
        left++;
      }
    }
  }
  return combination;
};

//I : array of numbers
//O : array of combination of numbers add to 0
//C : none
//E : return empty array if there is no combination matches with 0
