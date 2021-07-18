/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    // check if all count are double
    
    // there can only be one odd
    const letterArray = Array(26).fill(0);
    for (const char of s){
        const index = char.charCodeAt() - 'a'.charCodeAt();
        letterArray[index] += 1;
    }
    let countOdd = 0;
    for (const letterCount of letterArray){
        if (letterCount & 1 == 1){
            // it is odd
            countOdd += 1;
        }
    }
    return countOdd <= 1 ? true : false;
    
    
};