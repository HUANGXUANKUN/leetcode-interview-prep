/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    // check if zero divisible
    // if zero divisible by k
    const remainder = Array(k).fill(0);
    
    for (const num of arr){
        // get remainder 
        let r = num % k;
        if (r < 0){
            r = (r + k) % k; // if r = -2, r = (-2+k) % k
        }
        remainder[r] += 1;
    }
    
    // check numbers with r = 0, which itself form a pair
    if (remainder[0] & 1 == 1){
        // is odd, fail
        return false;
    }
    // check numbers with r = k/2
    if (remainder[k/2] & 1 == 1){
        // is odd, fail
        return false;
    }
    
    // check all other pair
    for (let i = 1; i < k/2; i++){
        const target = k-i;
        if (remainder[i] != remainder[target]){
            return false;
        }        
    }
    return true;
};