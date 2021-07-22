/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // consider the trending graph
    
    // cumulate all increasing trend
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++){
        // trending is increasing the next day, buy
        if(prices[i] < prices[i+1]){
            profit += prices[i+1] - prices[i];
        }
    }
    return profit;
    
};