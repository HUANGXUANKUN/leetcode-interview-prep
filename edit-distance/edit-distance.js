/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // dp[i][j] = min step for word1[0..i-1] to word2[0...j-1]
    
    // if A[i-1] == B[j-1]: dp[i][j] = dp[i-1][j-1]
    // else: dp[i][j] = 1+ mim(dp[i-1][j], dp[i][j-1])
    
    // delete/insert: 1+ min(dp[i-1][j], dp[i][j-1])
    // replace: 1 + dp[i-1][j-1]
    const n = word1.length;
    const m = word2.length;
    const dp = Array(n+1).fill(0).map(() => Array(m+1).fill(0));
    
    // init dp, it takes 1 to n steps for "" to convert to word1[0:i+1]
    for (let i = 0; i <= n; i++){
        dp[i][0] = i;
    }
    // init dp, it takes 1 to m steps for "" to convert to word2[0:i+1]
    for (let i = 0; i <= m; i++){
        dp[0][i] = i;
    }
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= m; j++){
            if(word1[i-1] == word2[j-1]){
                dp[i][j] = dp[i-1][j-1]
            }else{
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
            }
        }
    }
    // console.log(dp)
    return dp[n][m] 
};