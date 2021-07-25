/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // start from end position, look for posible jumper 
    const n = nums.length;
    if (n <= 1) return true;
    let targetIndex = n-1;
    for (let i = n-2; i >= 0; i--){
        // check if possible
        const jumpDist = nums[i];
        if (i + jumpDist >= targetIndex){
            // can jump, update targetIndex
            if (i == 0) return true; // at start position
            targetIndex = i;
        }
    }
    return false;
    
};