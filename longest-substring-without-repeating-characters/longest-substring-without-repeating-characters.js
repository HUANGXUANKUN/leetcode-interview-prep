/**
 * @param {string} s
 * @return {number}
 */

// a b c d b a f
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let windowMap = new Map(); // contain index of character
    let left = 0;
    for (let right = 0; right < s.length; right++){
        const curr = s[right];
        // check if duplicated, 
        // update left to windowMap(curr), and update windowMap
        if (windowMap.has(curr)){
            const prevIndex = windowMap.get(curr);
            left = Math.max(left, prevIndex+1); // dont update if duplicate is not in window
        }
        windowMap.set(curr, right);
        // no duplicate, update len
        maxLen = Math.max(maxLen, right-left+1);
    }
    return maxLen;
    
};