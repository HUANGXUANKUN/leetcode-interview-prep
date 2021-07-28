/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    // eg 1801
    // create map = {'1':Set(0, 3)}
    // add all number in secret to set
    const tokenA = secret.split('');
    const tokenB = guess.split('');

    const numberCountA = new Map();
    const numberCountB = new Map();
    for (const char of tokenA){
        numberCountA.set(char, (numberCountA.get(char) || 0) + 1);
    }
    for (const char of tokenB){
        numberCountB.set(char, (numberCountB.get(char) || 0) + 1);
    }

    let A = 0, B = 0;
    // find common number with same index
    // find all common number in B
    for (let i = 0; i < secret.length; i++){
        const numA = secret[i];
        const numB = guess[i];
        if (numA == numB){
            A++;
        }
    }
    for (let i = 0; i < 10; i++){
        const char = i.toString();
        const ACount = numberCountA.get(char) || 0;
        const BCount = numberCountB.get(char) || 0;
        // console.log("char = " + char, [ACount, BCount])
        B += Math.min(ACount, BCount);
    }
    // console.log([A,B])
    B -= A;
    return A + 'A' + B + 'B'
};