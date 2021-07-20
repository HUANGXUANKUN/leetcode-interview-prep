/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const indexMap = new Map();
    let left = 0;
    let maxLen = 0;
    for (let right = 0; right < s.length; right++){
        const curr = s[right];
        // console.log(curr);
        // check if existed
        if (indexMap.has(curr)){
            // existed, check if index position in within [left, right]
            if (indexMap.get(curr) >= left){
                // update left
                left = indexMap.get(curr) + 1;
            }
        }
        indexMap.set(curr, right);
        // console.log(indexMap);
        // console.log("left = " + left + " right = " + right);
        
        
        // update maxLen
        maxLen = Math.max(maxLen, right-left+1);
    }
    return maxLen;
};