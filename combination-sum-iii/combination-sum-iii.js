/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const solve = (k, n, startNum, sum, currList, result) => {
        // base case
        if (currList.length == k){
            if (sum == n){
                result.push([...currList]);
            }
            return;
        }
        if (sum > n || startNum > 9){ // impossible
            return;
        }
        for (let i = startNum; i <= 9; i++){
            // add the num
            currList.push(i);
            solve(k, n, i+1, sum + i, currList, result);
            // backtrack
            currList.pop();
        }
    }
    // const numSet = new Set();
    const result = [];
    solve(k, n, 1, 0, [], result);
    return result;
};