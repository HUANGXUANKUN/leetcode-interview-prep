/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    if (n <= 1) return 0;
    // at most two transaction
    // find profits from the left
    const maxProfitFromLeft = Array(n).fill(0);
    let minFromLeft = prices[0];
    for(let i = 1; i < n; i++){
        maxProfitFromLeft[i] = Math.max(maxProfitFromLeft[i-1], prices[i]-minFromLeft);
        minFromLeft = Math.min(minFromLeft, prices[i]);
    }
    
    // find profits from the right
    const maxProfitFromRight = Array(n).fill(0);
    let maxFromRight = prices[n-1];
    for (let i = n-2; i >= 0; i--){
        maxProfitFromRight[i] = Math.max(maxProfitFromRight[i+1], maxFromRight - prices[i]);
        maxFromRight = Math.max(maxFromRight, prices[i]);
    }
    
    // find the max profit
    let maxProfit = 0;
    for (let i = 0; i < n; i++){
        const currProfit = maxProfitFromLeft[i] + maxProfitFromRight[i];
        maxProfit = Math.max(maxProfit, currProfit);
    }
    return maxProfit;
};