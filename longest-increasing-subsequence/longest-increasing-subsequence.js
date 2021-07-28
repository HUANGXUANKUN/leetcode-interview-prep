/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // dp[i] = longest subsquence ending at i
    const n = nums.length;
    const dp = Array(n).fill(1);
    let maxLen = 0;
    // if i > j, dp[i] = dp[j]+1 for all j < i
    for (let i = 0; i < n; i++){
        for (let j = 0; j <i;j++){
            if (nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i])
    }
    // console.log(dp);
    return maxLen;
};