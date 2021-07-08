/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // backtracking
    const solve = (nums, result, tempList) => {
        if (nums.length == tempList.length) {
            result.push([...tempList]);
            return;
        }
        for (let i = 0; i < nums.length; i++){
            // check if visited
            if (nums[i] == Number.POSITIVE_INFINITY){
                // pass
                continue;
            }
            const curr = nums[i];
            tempList.push(curr);
            nums[i] = Number.POSITIVE_INFINITY; // mark as added
            solve(nums, result, tempList)
            nums[i] = curr; // unmark 
            tempList.pop(); //backtrack
        }
    }
    
    const result = [];
    solve(nums, result, []);
    return result;
};