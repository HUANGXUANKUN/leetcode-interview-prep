/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    // each number is used at most once
    const recur = (k, targetSum, startNum, currSum, currList, result) => {
        // console.log("startNum | currSum | [currList]            | result")
        // console.log([startNum, currSum, currList])
        // base case
        if (currList.length == k){
            if (currSum == targetSum){
                // console.log("###############added###################")
                result.push([...currList]);
            }
            return;
        }
        
        if (startNum > 9 || currSum > targetSum){
            // exceed, impossible
            return;
        }
        
        for (let i = startNum; i <= 9; i++){
            currList.push(i);
            recur(k, targetSum, i+1, currSum+i, currList, result);
            currList.pop();
        }
    }
    
    const result = [];
    recur(k, n, 1, 0, [], result);
    return result;
};