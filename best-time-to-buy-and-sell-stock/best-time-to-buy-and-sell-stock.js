/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // find the largest (p[j]-p[i])
    const n = prices.length;
    const maxFromRight = Array(n).fill(0);
    let currMax = 0;
    for (let i = n - 1; i >= 0; i--){
        currMax = Math.max(currMax, prices[i]);
        maxFromRight[i] = currMax;
    }
    let currMaxProfit = 0;
    // iterate from i = 0 to n-2
    for (let i = 0; i <= n-2; i++){
        currMaxProfit = Math.max(currMaxProfit,(maxFromRight[i+1]-prices[i]));
    }
    return currMaxProfit;
    
    
};