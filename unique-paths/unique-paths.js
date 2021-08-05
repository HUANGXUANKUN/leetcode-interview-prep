/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(n, m) {
    const travel = (i, j, n, m, dp) => {
        // if we reach the end, return 1
        if (i == n-1 && j == m-1){
            return 1;
        }
        // if going out of boundry, return 0
        if (i >= n || j >= m){
            return 0;
        }
        // check if we have visited [i,j] before
        if (dp[i][j] != -1){
            return dp[i][j];
        }
        let count = 0;
        // move down
        count += travel(i+1, j, n, m, dp);
        // move right
        count += travel(i, j+1, n,m, dp);
        dp[i][j] = count;
        return count;
    }
    const dp = Array(n).fill(0).map(()=>Array(m).fill(-1)); // initialized to -1
    return travel(0,0,n,m,dp);
};