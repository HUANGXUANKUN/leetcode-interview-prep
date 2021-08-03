/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length;
    let currIndex = 0;
    while(true){
        // jump dist from currIndex
        let jumpDist = nums[currIndex];
        if (currIndex + jumpDist >= nums.length - 1) return true; // jump over the end
        let furthest = currIndex;
        let newIndex = currIndex;
        for (let i = currIndex; i <= currIndex + jumpDist; i++){
            // update next index if it can jump furthest
            const nextIndex = i + nums[i];
            if (nextIndex > furthest){
                furthest = nextIndex;
                newIndex = i;
            }
        }
        console.log([currIndex, newIndex])
        // if nothing change, break and return false
        if (newIndex == currIndex) return false;
        currIndex = newIndex;
    }
};