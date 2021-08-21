/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let temp = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let right = 0; right < nums.length; right++){
        const curr = nums[right];
        temp += curr;
        maxSum = Math.max(maxSum, temp);
        if(temp <= 0) temp = 0;
    }
    return maxSum;
    
};