/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition 
to get new method signature.
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];
    let res = [intervals[0]];
    let x = 0;

    for (let i = 1; i < intervals.length; i++){
        let start = intervals[i][0];
        let end = intervals[i][1];

        let resCurrent = res[x];
        let resStart = resCurrent[0];
        let resEnd = resCurrent[1];

        if (start <= resEnd && end > resEnd) {
            res[x][1] = end;
        } else {
            res.push([start,end]);
            x++;
        }

    }
    return res;
    }

