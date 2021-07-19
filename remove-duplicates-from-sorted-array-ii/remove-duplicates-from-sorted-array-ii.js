/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // use pivot to place unique
    const n = nums.length;
    if (n <= 2) return;
    let pivot = 0;
    
    for (let i = 0; i < n; i++){
        // check if duplicated by checking pivot-1 and pivot-2, nums[0...pivot-1] are all non-duplicated
        if (pivot >= 2 && nums[i] == nums[pivot-1] && nums[i] == nums[pivot-2]){
            // duplicated
        }else{
            // not duplicated
            nums[pivot] = nums[i];
            pivot++;
        }
    }
    return pivot;
};