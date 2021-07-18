/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let startIndex = 0;
    let endIndex = startIndex + nums[0];
    
    while (endIndex < nums.length - 1){
        console.log("startIndex = " + startIndex)
        console.log("endIndex = " + endIndex)
        // iterate from start to end
        let newEndIndex = endIndex;
        for (let i = startIndex; i <= endIndex; i++){
            newEndIndex = Math.max(newEndIndex, i + nums[i])
        }
        // check if can move forward
        if (endIndex == newEndIndex){
            // never moved 
            return false;
        }
        startIndex = endIndex +1;
        endIndex = newEndIndex;
    }
    return true;
};