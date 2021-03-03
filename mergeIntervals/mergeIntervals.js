/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/* 56. Merge Intervals https://leetcode.com/problems/merge-intervals/

Given a collection of intervals, merge all overlapping intervals.


Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] >= intervals[i][0]) {
      intervals[i - 1][1] = Math.max(intervals[i - 1][1], intervals[i][1]);
      intervals.splice(i, 1);
      i--;
    }
  }
  return intervals;
};
