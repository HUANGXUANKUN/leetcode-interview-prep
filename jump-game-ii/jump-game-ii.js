/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
    if (n == 1) return 0;
    let currPos = 0;
    let count = 0;
    
    // currPos
    
    // from [currPos to currPos + currJumpDist], find the next Pos which can jump furtheest
    while (currPos < n-1){
        // console.log("currpos = " + currPos)
        const jumpDist = nums[currPos];
        if (currPos + jumpDist >= n-1) return count + 1; // jump and reach end
        let furthest = currPos;
        let nextPos = currPos;
        for (let i = currPos; i <= currPos + jumpDist; i++){
            const jumpedPos = i + nums[i];
            if (jumpedPos > furthest){
                furthest = jumpedPos;
                nextPos = i;
            }
        }
        currPos = nextPos;
        count++;
    }
    return count;
    
};