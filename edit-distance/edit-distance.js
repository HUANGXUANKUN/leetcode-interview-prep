/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // define two char at word1.i and word2.j
    // if charA == charB, dp[i][j] = dp[i-1][j-1]
    // else, to insert/delete, dp[i][j] = max(dp[i-1][j], d[i][j-1]) + 1
    // else to replace: dp[i][j] = dp[i-1][j-1] + 1
    const n = word1.length,
          m = word2.length;
    const dp = new Array(n+1).fill(0).map(()=>Array(m+1).fill(0));
    // init
    for (let i = 0; i <= n; i++){
        dp[i][0] = i;
    }
    for (let i = 0; i <= m; i++){
        dp[0][i] = i;
    }
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= m; j++){
            const charA = word1[i-1],
                  charB = word2[j-1];
            if (charA == charB){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
            }
        }
    }
    // console.log(dp);
    return dp[n][m];
};