/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length;
    if(n<3){
        return [];
    }
    const result = []
    
    // no duplicate
    nums.sort((a,b)=> a-b);
    console.log(nums)
    // three sum
    for (let i = 0; i < nums.length;i++){
        const targetSum = 0 - nums[i];
        // remove duplicate
        if (i > 0 && nums[i] == nums[i-1]) continue
        
        // two pointer
        let left = i+1;
        let right = nums.length -1;
        // console.log("i = " + i)
        while (left < right){
            // console.log([left, right])
            const currSum = nums[left] + nums[right]
            if (currSum == targetSum){
                result.push([nums[i], nums[left], nums[right]]);
                // console.log("added = " + [i, left, right])
                left++;
                right--;
                
                // remove duplicate triplets
                while (left < right && nums[left] == nums[left-1]){
                    left++;
                }
                while (left < right && nums[right] == nums[right+1]){
                    right--;
                }
                // console.log("new left right = " + [left, right])
            }
            else if (currSum < targetSum){
                left++;
            }else{
                right--;
            }
        }
    }
    
    return result;
    
};