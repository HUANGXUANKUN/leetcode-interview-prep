/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // counter
    let currNum = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++){
        const newNum = nums[i];
        if (newNum == currNum){
            count++;
        }else{
            // not equal
            if (count >= 1){
                count -= 1;
            }else{
                // count == 0, change num
                currNum = newNum;
                count = 1;
            }
        }
    }
    return currNum;
    
};