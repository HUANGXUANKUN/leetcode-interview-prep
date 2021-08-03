/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const tokens = s.split(' ');
    // check length
    const n = pattern.length, 
          m = tokens.length;
    if (n != m) return false;
    // pattern to word map
    // word to pattern map
    const patternToWord = new Map();
    const wordToPattern = new Map();
    for (let i = 0; i < n; i++){
        const p = pattern[i];
        const word = tokens[i];
        // pattern exists before
        if (patternToWord.has(p)){
            if (patternToWord.get(p) != word){
                return false;
            }
            // if word does not exists or word to pattern is not the same
            if (!wordToPattern.has(word) || wordToPattern.get(word) != p){
                return false;
            }
        }else{
            // if pattern not exists, then word not exists too
            if (wordToPattern.has(word)) return false;
        }
        patternToWord.set(p, word);
        wordToPattern.set(word, p);
    }
    return true;
    
};