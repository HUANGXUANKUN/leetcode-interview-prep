/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // contains n+1 integer in range [1, n]
    // swap nums[i], nums[nums[i]-1]
    let i = 0;
    while (i < nums.length){
        if (i == nums[i]+1) {
            i++;
            continue;
        }
        // swap
        let swapIndex = nums[i]-1;
        while(nums[i] != nums[swapIndex]){
            [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
            // update swapIndex
            swapIndex = nums[i]-1;
        }
        i++;
    }
    // console.log(nums);
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != i+1){
            // i+1 is missing and nums[i] is duplcate
            return nums[i]
        }
    }
    return nums[0]
};