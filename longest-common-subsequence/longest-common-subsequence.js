/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // dp[i][j] = lcs of A[0...i-1] and B[0...j-1]
    // dp[0][0] = 0
    const n = text1.length,
          m = text2.length;
    
    const dp = Array(n+1).fill(0).map(()=>Array(m+1).fill(0));
    // console.log(dp)
    // let maxLen = 0;
    for (let i = 1; i <= n; i++){
        for(let j = 1; j <= m; j++){
            if (text1[i-1] == text2[j-1]){
                // equal
                dp[i][j] = 1 + dp[i-1][j-1];
                // update len
                // maxLen = Math.max(maxLen, dp[i][j]);
            }else{
                // not equal
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
                // console.log("not equal " + dp[i][j])
            }
        }
    }
    console.log(dp)
    return dp[n][m];
};