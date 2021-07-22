/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length != words.length){
        return false;
    }
    const pToWordMap = new Map(); // {pattern : word}
    const wordToPMap = new Map(); // {word : p}
    
    for (let i = 0; i < pattern.length; i++){
        const p = pattern[i];
        const word = words[i];
        // console.log(map);
        if (pToWordMap.has(p)){
            // check if equal
            if (pToWordMap.get(p) != word) return false;
        }
        if (wordToPMap.has(word)){
            if (wordToPMap.get(word) != p) return false;
        }
        pToWordMap.set(p, word);
        wordToPMap.set(word, p);
    }
    return true;
    
};