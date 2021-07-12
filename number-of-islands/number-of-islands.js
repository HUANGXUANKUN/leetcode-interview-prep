/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (grid, i, j) => {
        // base case
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length){
            return
        }
        
        if(grid[i][j] == '0'){ // if visited or water
            return
        }
        // mark as visited
        grid[i][j] = '0' 
        
        // visit in 4 direction
        dfs(grid, i+1, j)
        dfs(grid, i-1, j)
        dfs(grid, i, j+1)
        dfs(grid, i, j-1)
    }
    const n = grid.length;
    const m = grid[0].length;
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            // console.log("i = " + i + " j = " + j)
            // console.log(grid)
            if(grid[i][j] == '1'){ // not visited
                count+=1;
                dfs(grid, i, j);
            }
        }
    }
    return count;
    
};