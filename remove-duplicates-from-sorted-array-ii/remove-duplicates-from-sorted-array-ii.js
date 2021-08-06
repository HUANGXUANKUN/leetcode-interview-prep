/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // in place 
    // 1 1 1 -> duplicates
    // 1 1 -> not duplicates
    
    // O(N)
    // record the pivot points 
    // record the prev number and prev prev number
    if (nums.length <= 2) return nums.length;
    let prev1 = nums[0],
        prev2 = nums[1];
    let pivot = 2;
    for (let i = 2; i < nums.length; i++){
        // check if the curr number is a duplicate
        const curr = nums[i];
        if (curr != prev1 || curr != prev2){
            nums[pivot] = curr;
            pivot += 1; 
        }
        // updte prev1, prev2
        prev1 = prev2;
        prev2 = curr;
    }
    // 1 2 3 4 _pivot_ -> pivot value = 4
    return pivot;
};