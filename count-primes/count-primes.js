/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // start from 2
    if (n <= 1) return 0;
    const checked = Array(n).fill(0);
    let primeCount = 0;
    for (let i = 2; i < n; i++){
        // if not checked, is prime
        if (checked[i] == 0){
            checked[i] = 1;
            primeCount++;
            // check all multiple of prime
            for (let j = i+i; j < n; j+=i){
                checked[j] = 1;
            }
        }
        // if checked, is not a prime
    }
    return primeCount;
    
    
};