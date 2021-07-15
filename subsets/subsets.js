/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const solve = (nums, startIndex, currList, result) =>{
        for (let i = startIndex; i < nums.length; i++){
            currList.push(nums[i]);
            // add to result
            result.push([...currList]);
            solve(nums, i+1, currList, result);
            // backtrack
            currList.pop();
        }
    }
    
    const result = [[]];
    solve(nums, 0, [], result)
    return result;
};