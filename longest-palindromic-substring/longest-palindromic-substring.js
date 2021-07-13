/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // dp
    const n = s.length;
    const dp = Array(n).fill(false).map(() => Array(n).fill(false)); // dp[a][b] = s[a...b] is palindrome
    let maxLen = 0;
    let startIndex = 0;
          
    // dp[a][b] = (s[a] == s[b] and dp[a+1][b-1])
    for (let j = 0; j < n; j++){
        for (let i = 0; i <= j; i++){
            // check s[i] and s[j]
            if (s[i] == s[j]){
                // check distance
                if (j - i + 1 <= 3) dp[i][j] = true;
                else if (dp[i+1][j-1]) dp[i][j]= true;
            }
            if (dp[i][j] == true){
                // console.log("i = " + i + " j = " + j);
                // update max length
                if (j-i+1 > maxLen){
                    maxLen = j-i+1;
                    startIndex = i;
                    // console.log("maxlen " + maxLen)
                    // console.log("startIndex " + startIndex)
                }
                
            }
        }
    }
    // console.log(dp)
    if(maxLen > 0) return s.slice(startIndex, startIndex + maxLen);
    return "";
};