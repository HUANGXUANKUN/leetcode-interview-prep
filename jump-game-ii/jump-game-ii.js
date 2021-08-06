/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumpCount = 0;
    let pos = 0;
    // base case
    if (nums.length == 1){
        return jumpCount;
    }
    while (true){
        // iterate over the whole jumping dist possible
        console.log("we are at pos = " + pos);
        const jumpDist = nums[pos];
        let furthest = pos;
        let nextPos = pos;
        console.log("furthest for next pos = " + (pos + jumpDist))
        // if last index is within jumping dist
        if (pos + jumpDist >= nums.length - 1){
            // we can reach the end
            return jumpCount + 1;
        }
        for (let i = pos; i <= pos + jumpDist; i++){
            if (i + nums[i] > furthest){
                // update the furthest 
                furthest = i + nums[i]; 
                nextPos = i;
            }
        }
        console.log("we will jump to next pos = " + nextPos);
        console.log("furthest " + furthest);
        jumpCount += 1;
        pos = nextPos;
        console.log("our jumping count = " + jumpCount);
    }
    
};