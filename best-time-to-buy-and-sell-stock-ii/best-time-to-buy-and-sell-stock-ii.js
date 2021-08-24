/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // only buy if the next day prices is higher
    // sell immediate the nextday
    let res = 0;
    for (let i = 0; i < prices.length - 1; i++){
        const curr = prices[i];
        const next = prices[i+1];
        if (curr < next){
            // buy today, sell tmr
            res += next - curr;
        }
    }
    return res;
};