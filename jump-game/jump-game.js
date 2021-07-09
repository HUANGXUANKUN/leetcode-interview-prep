/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const dp = (nums, currIndex, jumped) => {
        const n = nums.length;
        // base case
        if (currIndex >= n - 1){
            // reaching last index
            jumped[currIndex] = true;
            return
        }
        // if visited
        if (jumped[currIndex]) return;
        
        jumped[currIndex] = true;
        
        for (let i = 1; i <= nums[currIndex]; i++){
            // jump forward 1 to nums[curr] steps
            dp(nums, currIndex + i, jumped)
            if (jumped[n-1]) return true;
        }
    }
    
    const n = nums.length;
    let jumped = Array(n).fill(false);
    dp(nums, 0, jumped);
    return jumped[n-1]
};