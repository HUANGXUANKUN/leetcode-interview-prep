/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // find the total number of factor of 5 from 1...n
    let five_multi = 5;
    let count = 0;
    while (five_multi <= n){
        count += Math.floor(n/five_multi);
        five_multi *= 5;
    }
    return count;
    
};