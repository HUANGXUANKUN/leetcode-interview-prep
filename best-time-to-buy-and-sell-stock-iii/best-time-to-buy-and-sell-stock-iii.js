/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    if (n <= 1) return 0;
    // at most two transaction
    // find max transaction for [1, i] and [i+1, n]
    const maxFromLeft = Array(n).fill(0);
    let leftMin = Number.POSITIVE_INFINITY;
    let leftMaxProfit = 0;
    
    // find max transaction for [i...i] for all i
    for (let i = 0; i < n; i++){
        leftMin = Math.min(leftMin, prices[i]);
        leftMaxProfit = Math.max(leftMaxProfit, prices[i]-leftMin);
        maxFromLeft[i] = leftMaxProfit;
        // console.log([leftMin, leftMaxProfit, maxFromLeft[i]])
    }
    // console.log(maxFromLeft)
    
    // find max transaction for [i...n] for all i
    const maxFromRight = Array(n).fill(0);
    let rightMax = Number.NEGATIVE_INFINITY;
    let rightMaxProfit = 0;

    for (let i = n-1; i >= 0; i--){
        rightMax = Math.max(rightMax, prices[i]);
        rightMaxProfit = Math.max(rightMaxProfit, rightMax - prices[i]);
        maxFromRight[i] = rightMaxProfit;
    }
    
    // find max transaction for [i...i] for all i
    let maxResult = 0;
    for (let i = 0; i < n; i++){
        const leftProfit = maxFromLeft[i]; // profit of [1..i]
        const rightProfit = maxFromRight[i]; // profit of [i..n]
        maxResult = Math.max(maxResult, leftProfit + rightProfit);
    }
    return maxResult;
    
};