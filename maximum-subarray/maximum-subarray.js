/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let currSum = 0;
    for (const num of nums){
        if (currSum + num > num){
            currSum += num;
        }
        else{
            currSum = num
        };
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
};