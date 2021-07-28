/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const recur = (amount, currSum, coins, coinIndex, dp, currList) => {
        if (currSum == amount){
            // console.log("found! ", currList)
            return 1;
        }
        else if (currSum > amount || coinIndex >= coins.length) return 0; 
        
        // check if visited
        if (dp[currSum][coinIndex] != -1){
            // console.log("visited at [currSum,index] = " + [currSum, coinIndex] + " count = " + dp[currSum][coinIndex])
            // console.log(currList);
            return dp[currSum][coinIndex];
        }
        let count = 0;
        for (let i = coinIndex; i < coins.length; i++){
            const coinValue = coins[i];
            currList.push(coinValue);
            count += recur(amount, currSum + coinValue, coins, i, dp, currList);
            currList.pop();
        }
        dp[currSum][coinIndex] = count;
        return dp[currSum][coinIndex];
    }
    // coins.sort();
    const dp = Array(amount+1).fill(0).map(()=>Array(coins.length).fill(-1)); // dp[amount][index] = from amount = i, how many combination to reach amount
    return recur(amount, 0, coins, 0, dp, []);
};