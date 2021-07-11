/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const solve = (k, target, startIndex, currSum, currList, result) => {
        // base case
        // check currList.length 
        if (currList.length == k){
            if (target == currSum){
                result.push([...currList]);
            }
            return;
        }
        
        // iterate from startindex
        for (let i = startIndex; i<=9; i++){
            currList.push(i);
            solve(k, target, i+1, currSum + i, currList, result);
            currList.pop();
        }
    }
    
    const result = [];
    solve(k, n, 1, 0, [], result);
    return result;
    
};