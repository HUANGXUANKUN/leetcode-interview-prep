/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // swap non zero to swap index
    let swapIndex = 0;
    for (let i = 0; i < nums.length; i++){
        const curr = nums[i];
        if (curr != 0){
            [nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]]; // swap
            swapIndex += 1;
        }
    }
};