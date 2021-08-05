/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // sliding window with size of p.length
    // O(N) to O(N^2)
    
    // basecase
    if (p.length > s.length) return [];
    let left = 0;
    const letterCount = Array(26).fill(0); // a -> 0, b->1, ... z -> 25
    const pLetterCount = Array(26).fill(0);
    for (const char of p){
        const letterIndex = char.charCodeAt() - 'a'.charCodeAt(); // char - 'a'
        pLetterCount[letterIndex] += 1;
    }
    const hashPString = pLetterCount.toString();
    const result = [];
    for (let right = 0; right < s.length; right++){
        const letter = s[right];
        const letterIndex = letter.charCodeAt() - 'a'.charCodeAt(); // char - 'a'
        letterCount[letterIndex] += 1;
        // shrink the window if needed
        if (right -left + 1 > p.length){
            const leftMostLetter = s[left];
            left += 1;
            const leftMostIndex = leftMostLetter.charCodeAt() - 'a'.charCodeAt(); // char - 'a'
            letterCount[leftMostIndex] -= 1;
        }
        // windowsize is absoulte <= p.length
        if (right - left + 1 == p.length){
            // check every single char count
            // hashing an array
            const hashString = letterCount.toString();
            if (hashString == hashPString){
                result.push(left);
            }
        }
    }
    return result;
};