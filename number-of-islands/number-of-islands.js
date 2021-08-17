/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (grid, i, j) => {
        const n = grid.length,
              m = grid[0].length;
        
        if(i < 0 || j < 0 || i >= n || j >= m || grid[i][j] == '0'){
            return;
        }
        grid[i][j] = '0'; // make current cell water (block from revisiting)
        // dfs left right top bottom
        dfs(grid, i-1, j);
        dfs(grid, i+1, j);
        dfs(grid, i, j-1);
        dfs(grid, i, j+1);
    }
    
    // dfs
    let count = 0;
    const n = grid.length,
          m = grid[0].length;
    for (let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] == '1'){
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
    
};