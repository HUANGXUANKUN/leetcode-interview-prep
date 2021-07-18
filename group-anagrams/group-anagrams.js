/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const dict = new Map();
    for (const word of strs){
        const letterArray = Array(26).fill(0);
        for (const char of word){
            const letterIndex = char.charCodeAt() - 'a'.charCodeAt();
            // console.log("char = " + char, " index = " + letterIndex);
            letterArray[letterIndex] += 1;
        }
        // console.log(letterArray)
        // hashkey
        const wordKey = letterArray.toString();
        if (!dict.has(wordKey)){
            dict.set(wordKey, []);
        }
        dict.get(wordKey).push(word);
    }
    // console.log(dict)
    // return array
    return [...dict.values()];
    
};