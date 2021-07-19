/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const dfs = (grid, i, j, n, m, paths) => {
        if (i >= n || j>= m || grid[i][j] == 1){
            return 0;
        }
        // check if visited
        if (paths[i][j] != -1){
            return paths[i][j];
        }
        
        // if reached end
        if (i == n-1 && j == m-1){
            // reached
            return 1;
        }
        
        //right
        const rightPath = dfs(grid, i, j+1, n, m, paths);
        //bottom
        const bottomPath = dfs(grid, i+1, j, n, m, paths);
        paths[i][j] = rightPath + bottomPath;
        return paths[i][j];
    }
    const n = obstacleGrid.length,
          m = obstacleGrid[0].length;
    const paths = Array(n).fill(0).map(()=>Array(m).fill(-1));
    return dfs(obstacleGrid, 0, 0, n, m, paths);
    
};