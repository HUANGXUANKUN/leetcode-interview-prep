/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // find the max prices[j] - prices[i] where j > i
    // record the min prices so far
    let maxDiff = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++){
        // check if largest than max
        maxDiff = Math.max(maxDiff, prices[i] - minPrice)
        minPrice = Math.min(minPrice, prices[i]);
        
    }
    return maxDiff;
    
    
    
};