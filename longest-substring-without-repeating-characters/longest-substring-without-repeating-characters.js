/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    const map = new Map();
    let maxLen = 0;
    for (let right = 0; right < s.length; right++){
        const curr = s[right];
        if(map.has(curr)){
            // check if last index is in window
            const lastIdx = map.get(curr);
            if(lastIdx >= left) left = lastIdx+1;
        }
        map.set(curr, right);
        maxLen = Math.max(right-left+1, maxLen);
    }
    return maxLen;
    
};