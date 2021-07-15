/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const solve = (nums, tempList, result) =>{
        // base case
        if(tempList.length == nums.length){
            // add to result
            result.push([...tempList]);
            return;
        }
        let prevAdded = -10;
        for (let i = 0; i < nums.length; i++){
            // check if duplicated
            if (prevAdded!= -10 && nums[i] == prevAdded){
                continue;
            }
            // added
            if (nums[i] == Number.NEGATIVE_INFINITY){
                continue;
            }
            
            const curr = nums[i]
            prevAdded = curr;
            
            nums[i] = Number.NEGATIVE_INFINITY;
            
            tempList.push(curr);
            
            solve(nums, tempList, result);
            
            nums[i] = curr;
            tempList.pop();
        }
        
    }    
    
    nums.sort((a,b)=>a-b);
    const result = [];
    solve(nums, [], result);
    return result;
};