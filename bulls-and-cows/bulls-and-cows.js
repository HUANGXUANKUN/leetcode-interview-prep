/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    // only digit
    // to find A, iterate to find common digit with same index
    // add common digit with same index in commonArr
    // count digit of A in digitA
    // count digit of B in digitB
    
    // for each digit, B += min(digitA[digit], digitB[digit]) - commonArr[digit]
    
    let n = secret.length;
    const digitCommon = Array(10).fill(0);
    const digitA = Array(10).fill(0);
    const digitB = Array(10).fill(0);
    for(let i = 0; i < n; i++){
        const a = secret[i],
              b = guess[i];
        if (a == b) digitCommon[+a] += 1;
        digitA[+a] += 1;
        digitB[+b] += 1;
    }
    // console.log(digitCommon);
    // console.log(digitA);
    // console.log(digitB);
    
    let bulls = 0;
    let cows = 0;
    // iterate digit
    for (let i = 0; i <= 9; i++){
        bulls += digitCommon[i];
        cows += Math.min(digitA[i], digitB[i]) - digitCommon[i];
    }
    return bulls + 'A' + cows + 'B';
};