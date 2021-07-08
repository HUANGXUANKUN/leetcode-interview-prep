/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (word of strs){
        const charDict = Array(26).fill(0);
        // count 
        for (char of word){
            // convert 'a' to 0
            const charIndex = char.charCodeAt() - 'a'.charCodeAt()
            console.log(char + " " + charIndex);
            charDict[charIndex] += 1;
        }
        // convert charDict to string
        const hashKey = charDict.toString();
        if(!map.has(hashKey)){
            map.set(hashKey, [word])
        }
        
        else{
            map.get(hashKey).push(word);
        }
    }
    console.log(map);
    return [...map.values()];
    
};