/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const nextWord = (s, dict, currIndex, visited) => {
        if (currIndex >= s.length){
            // reach the end, return true;
            return true;
        }
        if(visited.has(currIndex)){
            return false; // visited but not end, means it is invalid
        }
        let word = "";
        for (let i = currIndex; i < s.length; i++){
            word += s[i];
            if (dict.has(word)){
                const result = nextWord(s, dict, i+1, visited);
                if (result) return true;
            }
        }
        visited.add(currIndex);
        return false;
    }
    const dict = new Set(wordDict);
    const visited = new Set();
    return nextWord(s, dict, 0, visited);
    
};