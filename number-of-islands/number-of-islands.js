/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const bfs = (grid, i, j, n, m) => {
        // visit all '1', and change it to '0'
        if (i < 0 || j < 0 || i >= n || j>= m){
            return; //out of bound
        }
        if (grid[i][j] == '0') return; // visited
        grid[i][j] = '0';
        // visit 4 direction
        bfs(grid, i+1, j, n, m)
        bfs(grid, i-1, j, n, m)
        bfs(grid, i, j+1, n, m)
        bfs(grid, i, j-1, n, m)
    }
    const n = grid.length,
          m = grid[0].length;
    let count = 0;
    for (let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if (grid[i][j] == '1'){
                count+=1;
                bfs(grid, i, j, n, m)
            }
        }
    }
    return count;
    
};