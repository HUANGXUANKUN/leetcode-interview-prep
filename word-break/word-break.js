/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    function solve(s, dict, startIndex, visited){
        if(visited[startIndex] != -1){
            if (visited[startIndex] == 0){
                return false;
            }
            return true;
        }
        
        let temp = [];
        visited[startIndex] = 0; // visited, false result
        for (let i = startIndex; i < s.length; i++){
            temp.push(s[i]);
            const word = temp.join('');
            // check word
            if (dict.has(word)){
                if (solve(s, dict, i+1, visited)){
                    visited[startIndex] = 1; // from s[startIndex...n] is valid
                    break;
                }
            }  
        }
        if (visited[startIndex] == 1){
            return true;
        }
        return false;
        
    }
    const dict = new Set(wordDict);
    const visited = Array(s.length).fill(-1);
    return solve(s, dict, 0, visited);
};