/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    // dp[i][0] = longest sequence ended at i with sequence decreasing
    // dp[i][1] = longest sequence ended at i with sequence increasing
    
    // for all j < i, if nums[j] > nums[i] (decreasing), dp[i][0] = max(dp[i][0], dp[j][1]+1)
    // for all j < i, if nums[j] < nums[i] (increasing), dp[i][1] = max(dp[i][1], dp[j][0]+1)
    const n = nums.length;
    if (n <= 1) return n;
    const dp = Array(n).fill(0).map(()=>Array(2).fill(1)); // dp[n][2] = n*[1,1]
    let maxLen = 1;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < i; j++){
            // check increasing
            if (nums[j] < nums[i]){
                dp[i][1] = Math.max(dp[i][1], dp[j][0]+1); // at j decreasing, at i increasing
            }
            
            // check decreasing
            if (nums[j] > nums[i]){
                dp[i][0] = Math.max(dp[i][0], dp[j][1]+1); // at j increasing, at i decreasing
            }
            maxLen = Math.max(maxLen, dp[i][0], dp[i][1]);
        }
    }
    return maxLen;
    
    
    
};