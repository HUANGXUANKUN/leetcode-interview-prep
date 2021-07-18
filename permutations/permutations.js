/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const solve = (nums, addSet, tempList, result) =>{
        if (tempList.length == nums.length){
            result.push([...tempList]);
        }
        // add remaining
        for (let i = 0; i < nums.length; i++){
            // check if added
            if (addSet.has(i)){
                continue;
            }
            // add
            tempList.push(nums[i]);
            addSet.add(i);
            solve(nums, addSet, tempList, result);
            addSet.delete(i);
            tempList.pop();
        }
    }
    const result = [];
    const set = new Set();
    solve(nums, set, [], result);
    return result;
    
};