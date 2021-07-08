/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let windowSum = nums[0];
    for (let i = 1; i < nums.length; i++){
        const curr = nums[i];
        windowSum = Math.max(curr, curr+windowSum);
        maxSum = Math.max(windowSum, maxSum);      
    }
    return maxSum;
    
};