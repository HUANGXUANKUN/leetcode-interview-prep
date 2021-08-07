/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    const map = new Map();
    let left = 0;
    for (let right = 0; right < s.length; right++){
        const curr = s[right];
        if (map.has(curr)){
            // already exists, update left
            const prevIndex = map.get(curr);
            left = Math.max(left, prevIndex+1);
        }
        map.set(curr, right);
        result = Math.max(result, right-left+1);
        // console.log("at right = " + right, [left, right, result])
        
    }
    return result;
    
};