/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const dp = Array(n).fill(0); // dp[j] = maxLen in nums[0...j]
    let maxLen = 0;
    for (let i = 0; i < nums.length; i++){
        let len = 1;
        for (let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                len = Math.max(len, dp[j] + 1);
            }
        }
        dp[i] = len;
        maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
    
};