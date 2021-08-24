/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // store the max price from the right
    const n = prices.length;
    const maxPrices = Array(n).fill(0);
    let maxProfit = 0;
    let currMaxPrice = 0;
    for (let i = n-1; i >= 1; i--){
        currMaxPrice = Math.max(currMaxPrice, prices[i]);
        maxPrices[i] = currMaxPrice
    }
    for (let i = 0; i < n-1; i++){
        // find the max price from day [i+1...n-1]
        const maxSellPrice = maxPrices[i+1];
        maxProfit = Math.max(maxProfit, maxSellPrice - prices[i]);
    }
    return maxProfit;
};