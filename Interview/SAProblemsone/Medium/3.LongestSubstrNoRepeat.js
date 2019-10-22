/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and
              not a substring.

*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //window
    let lastPos = {};
    let maxLength = 0;
    let currentLength = 0;
    let startIdx = 0;

    for (let i = 0; i < s.length; i++) {

        if (lastPos[s[i]] >= startIdx) {
            startIdx =lastPos[s[i]] + 1;     
        }

        currentLength = i-startIdx+1;

        if (currentLength > maxLength) {
            maxLength = currentLength;

        }
        lastPos[s[i]] = i;
    }
    return maxLength;

 
};