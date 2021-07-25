/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // sum all the increasing trend
    let sum = 0;
    for (let i = 0; i < prices.length-1; i++){
        // check if [i, i+1] is increasing trend
        if (prices[i+1] > prices[i]){
            sum+=prices[i+1] - prices[i]
        }
    }
    return sum;
    
};