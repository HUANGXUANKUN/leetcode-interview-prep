/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // use counter approach
    let curr_max_count_num = nums[0]
    let count = 1;
    for (let i = 1; i<nums.length; i++){
        if (curr_max_count_num==nums[i]){
            count++;
        }else{
            if (count > 0){ // if count = 0, switch number
                count--;
            }else{
                curr_max_count_num = nums[i];
                count = 1;               
            }
        }
        // console.log("currnum = " + curr_max_count_num)
        // console.log("count = " + count)
        
    }
    return curr_max_count_num;
    
};