/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    // n is even
    const remainderCounter = Array(k).fill(0);
    for (const num of arr){
        // get remainder
        let remainder = num % k;

        // to account for negative
        remainder = (remainder + k) % k;
        // console.log(num, remainder)
        remainderCounter[remainder] += 1;
    }
    console.log(remainderCounter)
    // check if remiander[0] is even
    if (remainderCounter[0] & 1 == 1){
        return false;
    }
    // if k is even, check if remainder[k/2] is even
    const half_k = k >> 1;
    if (k & 1 == 0 && remainderCounter[half_k] & 1 == 0){
        return false;
    }
    // k = 5, remainder = 0, 1, 2, 3, 4
    // 0, 1, 2, 3
    // check i from 1 to k/2 -1 
    for (let i = 1; i <= Math.floor(k/2); i++){
        const oppositeRemainder = k - i;
       // console.log([i, oppositeRemainder], [remainderCounter[i], remainderCounter[oppositeRemainder]])
        
        if (remainderCounter[i] != remainderCounter[oppositeRemainder]) return false;
    }
    return true;
}
    