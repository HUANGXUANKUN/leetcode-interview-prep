/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const isValid = (s, wordSet, startIndex, dp) => {
        // base case
        if (startIndex == s.length){
            // s = leetcode, we are at i = 8, it implies "leetcode" is valid
            return true;
        }
        // if we have checked this startIndex
        if (dp[startIndex] == true){
            return false; // because it is invalid
        }
        dp[startIndex] = true;
        // starting from startIndex
        for (let i = startIndex; i < s.length; i++){
            // check if s[startIndex: i+1] is a valid word
            const temp = s.slice(startIndex, i+1);
            if (wordSet.has(temp)){
                // it is a valid word, check remaining s[i+1, n]
                const remainingIsValid = isValid(s, wordSet, i+1, dp);
                if (remainingIsValid) return true;
            }
        }
        return false;
    }
    const dp = Array(s.length).fill(false);
    const wordSet = new Set(wordDict);
    return isValid(s, wordSet, 0, dp);
};