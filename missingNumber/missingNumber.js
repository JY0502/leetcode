/**
 * @param {number[]} nums
 * @return {number}
 */

/* 268. Missing Number: https://leetcode.com/problems/missing-number/

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/
// input     :  array of integers
// output    : an integer that missing
// constraint: time complexity - O(n), space complexity - 0(1)
// edge case : when the array doesn't have the range that from 0 to n. when the array seems like it has all the number without missing one, return the next number.

// solution 1 :
// time complexcity : O(n)
// space complexcity : O(1)
var missingNumber = function (nums) {
  // create variable for total from 0 to n
  let total = 0;
  // create variable for total from nums array
  let numsTotal = 0;
  // traverse thru nums array
  for (let i = 0; i < nums.length; i++) {
    // reassign total with total + 1
    // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8+ 9 + 10 (if missing number at nums array)
    // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8+ 9 + 10 + 11 (if no missing number at nums array)
    total += i + 1;
    // reassign numsTotal with numsTotal + current number
    numsTotal += nums[i];
  }
  //return the result from substracting numsTotla from total
  return total - numsTotal;
};

/*
// solution 2 :
// time complexcity : O(n log n)
// space complexcity : O(1)
var missingNumber = function(nums) {
  // sort the array (0, 1, 3)
  nums.sort((a, b) => a - b); // O(n log n)
  // declare result variable
  let result = 0;

  // traverse thru nums
  for(let i = 0; i < nums.length; i++) {
    // if the current number (3) is not equal to result
    if(nums[i] !== result) {
      break;
    }
    result++;
  }

  // return the result
  return result;
}; */

// test case
var input1 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
var output1 = 8;
var actual1 = missingNumber(input1);
console.log("test1 result is ", output1 === actual1);

// test case
var input2 = [0, 1];
var output2 = 2;
var actual2 = missingNumber(input2);
console.log("test2 result is ", output2 === actual2);

// test case
var input3 = [0];
var output3 = 1;
var actual3 = missingNumber(input3);
console.log("test3 result is ", output3 === actual3);
