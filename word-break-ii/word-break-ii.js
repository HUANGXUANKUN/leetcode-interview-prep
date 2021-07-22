/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const recur = (s, index, dict, result, currList) => {
        // base case
        if (index >= s.length){
            result.push(currList.join(' '));
            return;
        }
        const wordArr = [];
        for (let i = index; i < s.length; i++){
            const char = s[i];
            wordArr.push(char);
            const word = wordArr.join('');
            if (dict.has(word)){
                // proceed
                currList.push(word);
                recur(s, i+1, dict, result, currList);
                currList.pop();
            }
        }
    }
    const dict = new Set(wordDict);
    const result = [];
    recur(s, 0, dict, result, []);
    // output result
    return result;
    
};