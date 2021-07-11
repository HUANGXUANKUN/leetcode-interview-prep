/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n< 2){
        return 0;
    }
    
    const primeMap = {};
    // from 2 to n,
    // if i not in prime set -> set primeSet[i] to true
    // then set all multiple of i as primeSet[i] = false 
    // else if in primeset = true, continue
    // count
    // console.log(Math.sqrt(n))
    
    let notPrimeCount = 0;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if (!(i in primeMap)){
            // it is prime
            // primeMap.add(i);
            // set all multiple of i to false
            let multiple_of_prime = i+i;
            for (let j = i+i; j < n; j += i){
                if (!(j in primeMap)){
                    notPrimeCount += 1;  
                    primeMap[j] = 1;
                }
                // console.log("at j = " + j)
            }
        }
    }
    // console.log(primeMap);
    // exclude "1", "n" and non-prime
    // console.log(notPrimeCount)
    return n-2-notPrimeCount;
};

// 1 2 3 /4 5 /6 7 /8 /9