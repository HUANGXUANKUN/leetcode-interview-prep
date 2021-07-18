/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const directions = [[0, 1], [1, 0]];
    const dfs = (grid, i, j, n, m, pathSum, currSum) => {
        // base case
        if (i >= n || j >= m){
            return;
        }
        
        // check if visited
        if (pathSum[i][j] != -1){
            // visited, check currSum
            if (currSum + grid[i][j] >= pathSum[i][j]){ // this is not shorter
                return;
            }
        }
        // not visited, or shorter path
        pathSum[i][j] = currSum + grid[i][j];
        
        // visit 3 directions other than incoming path
        for (let [a, b] of directions){
            dfs(grid, i+a, j+b, n, m, pathSum, pathSum[i][j]);
        }
    }
    
    // use pathSum[i][j] to record min sum from (0, 0) to (i, j)
    const n = grid.length;
    const m = grid[0].length;
    const pathSum = Array(n).fill(0).map(()=>Array(m).fill(-1)); // init -1
    dfs(grid, 0, 0, n, m, pathSum, 0);
    return pathSum[n-1][m-1];
    
};