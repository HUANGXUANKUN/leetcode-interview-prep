/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const expand = (s, left, right) => {
        if (right >= s.length || s[left] != s[right]) return [left, left];
        let start = left,
            end = right;
        while(left >= 0 && right < s.length && s[left] == s[right]){
            start = left;
            end = right;
            left--;
            right++;
        }
        return [start, end];
    }
    // expand from center, start from i, i or (i-1, i)
    let maxLen = 0;
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++){
        console.log("i = " + i)
        // expand from i,i
        const result1 = expand(s, i, i);
        // expand from i, i+1
        const result2 = expand(s, i, i+1);

        
        if (result1[1] - result1[0] + 1 > maxLen){
            maxLen = result1[1] - result1[0] + 1;
            start = result1[0], end = result1[1];      
            // console.log(result1)
            
        }
        if (result2[1] - result2[0] + 1 > maxLen){
            maxLen = result2[1] - result2[0] + 1;
            start = result2[0], end = result2[1];    
            // console.log(result2)
        }
    }
    
    // console.log([start, end])
    return s.slice(start, end + 1)
    
};