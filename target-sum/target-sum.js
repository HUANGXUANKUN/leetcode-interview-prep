/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    // dp[index] records the visited state numIndex with a set
    const n = nums.length;
    const dp = Array(n).fill(0).map(()=>new Map());
    // time: O(min(n*sum[nums], 2^n))
    // space: O(n*sum[nums])
    return solve(nums, target, 0, 0, dp);
};

const solve = (nums, target, index, currSum, dp) => {
    // base case
    if (index == nums.length){
        // reach end
        if (target == currSum){
            return 1;
        }else{
            return 0;
        }
    }
    // check if visited dp[index][amount]
    if(dp[index].has(currSum)){
        return dp[index].get(currSum);
    }
    let count = 0;
    // add/minus
    count += solve(nums, target, index+1, currSum + nums[index], dp);
    count += solve(nums, target, index+1, currSum - nums[index], dp);
    dp[index].set(currSum, count);
    return count;
}