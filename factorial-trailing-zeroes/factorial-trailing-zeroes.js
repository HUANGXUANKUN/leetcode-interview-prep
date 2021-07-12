/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // find number of factor of 10 from 1 to n
    
    // since factor of 10 consist of 2 and 5, find the min number of factor of 2 and factor 5
    
    // since number of factor 5 is always smaller than factor of 2, only need to find factor of 5 in this case
    let count = 0
    let multiple_of_5 = 5;
    while(multiple_of_5 <= n){
        count += Math.floor(n/multiple_of_5)
        multiple_of_5 *= 5;
    }
    return count;

    
};