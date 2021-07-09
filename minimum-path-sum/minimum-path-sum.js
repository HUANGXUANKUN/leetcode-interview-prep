/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // move only right and bottom
    const move = (grid, n, m, i, j, visited) => {     
        // check if visited with shorter sum
        if (visited[i][j] != -1){
            return visited[i][j];
        }
        
        // reaching the end
        if (i == n-1 && j == m-1){
            return grid[i][j]
        }
        
        // this path is shorter
        let smallestSumFromCell = 0;
        let rightPathSum = Number.POSITIVE_INFINITY, downPathSum = Number.POSITIVE_INFINITY;
        
        // move right
        if (j+1 < m){
             rightPathSum = move(grid, n, m, i, j+1, visited)
        }
        // move bottom
        if(i+1 < n){
            downPathSum = move(grid, n, m, i+1, j, visited);
        }
        
        smallestSumFromCell = Math.min(rightPathSum, downPathSum) + grid[i][j]
        visited[i][j] = smallestSumFromCell;
        return visited[i][j]
    }
    const n = grid.length;
    const m = grid[0].length;
    const visited = Array(n).fill(-1).map(()=>Array(m).fill(-1))
    return move(grid, n, m, 0, 0, visited)
    
};