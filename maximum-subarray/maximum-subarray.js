/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let left = 0;
    let windowSum = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let right = 0; right < nums.length; right++){
        const curr = nums[right];
        windowSum += curr;
        maxSum = Math.max(maxSum, windowSum);
        if (windowSum <0){
            left = right+1;
            windowSum = 0;
        }
        console.log("left = " + left + " right = " + right )
        console.log("windowSum = " + windowSum + " maxSum = " + maxSum )
    }
    return maxSum;
};