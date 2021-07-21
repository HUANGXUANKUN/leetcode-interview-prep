/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // counter of p
    const pLetterCount = Array(26).fill(0);
    for(const char of p){
        const letterIndex = char.charCodeAt() - 'a'.charCodeAt();
        pLetterCount[letterIndex] += 1;
    }
    // convert pLetterCount to string
    const pStr = pLetterCount.toString();
    
    const sLetterCount = Array(26).fill(0);
    let result = [];
    // sliding window
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        const letterIndex = char.charCodeAt() - 'a'.charCodeAt();
        sLetterCount[letterIndex] += 1;
        // check if need shrink
        if (i >= p.length){
            const leftMostChar = s[i-p.length];
            const leftMostIndex = leftMostChar.charCodeAt() - 'a'.charCodeAt();
            sLetterCount[leftMostIndex] -= 1;
        }
        // compare string
        if(i >= p.length-1){
            if (sLetterCount.toString() == pStr){
                result.push(i-p.length+1);
            }
        }
        
    }
    return result;
    
    
};