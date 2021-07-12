/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // find total number of factors of 5 and multiple from 1 to n
    let power_of_5 = 5;
    let count = 0;
    
    // n/5 + n/25 + n/125 + .... + n/largest power of 5 that <= n
    while (power_of_5 <= n){
        let curr_count = Math.floor(n/power_of_5); // number of mulitple of power_of_5
        count += curr_count;
        power_of_5 = power_of_5 * 5; // next power of 5
    }
    return count;
    
    
    
    
};