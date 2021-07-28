/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    // eg 1801
    // create map = {'1':Set(0, 3)}
    // add all number in secret to set
    const tokens = secret.split('');
    const numberCount = new Map();
    for (const char of tokens){
        numberCount.set(char, (numberCount.get(char) || 0) + 1);
    }

    let A = 0, B = 0;
    for (let i = 0; i < secret.length; i++){
        const numA = secret[i];
        const numB = guess[i];
        // console.log([numA, numB])
        // console.log(numberCount);
        if (numA == numB){
            numberCount.set(numA, numberCount.get(numA)-1);
            A++;
            // if numberCount[numA] < 0, reduce B
            if (numberCount.get(numA) < 0){
                B--;
            }
        }
        else if (numberCount.get(numB) > 0){
            numberCount.set(numB, numberCount.get(numB)-1);
            B++;
        }
    }
    return A + 'A' + B + 'B'
};