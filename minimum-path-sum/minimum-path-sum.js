/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // backtracking + memorization
    // dp[i][j] = min number of paths from (i, j) to (n, m)
    // return dp[0][0]
    const dfs = (grid, n, m, i, j, dp) => {
        // basecase
        if (i == n-1 && j == m-1){
            return grid[i][j]; // reach end
        }
        if (i >= n || j >= m){
            return Number.POSITIVE_INFINITY; // exceed
        }
        // within boundary
        if (dp[i][j] != -1){
            return dp[i][j]; // visited
        }
        const rightSum = dfs(grid, n, m, i, j+1, dp); //right
        const bottomSum = dfs(grid, n, m, i+1, j, dp); //bottom
        dp[i][j] = grid[i][j] + Math.min(rightSum, bottomSum);
        return dp[i][j];
    }
    const n = grid.length,
          m = grid[0].length;
    const dp = Array(n).fill(0).map(() => Array(m).fill(-1));
    return dfs(grid, n, m, 0, 0, dp);
};