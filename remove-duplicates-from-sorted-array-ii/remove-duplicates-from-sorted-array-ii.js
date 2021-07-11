/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let swapIndex = 2;
    for (let i = 2; i < nums.length; i++){
        // compare with number at i-1 and i-2
        const curr = nums[i]
        if (curr == nums[swapIndex-1] && curr == nums[swapIndex-2]){
            // two duplicate alr, skip
            continue
        }else{
            // swap
            [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
            swapIndex += 1;
        }
    }
    return swapIndex;
    
};