/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(n, m) {
    // use path[i][j] to record number of path from (i, j) to (n, m)
    const dfs = (i, j, n, m, paths) => {
        // console.log(`i = ${i}, j = ${j}`)
        if(i == n-1 && j == m-1){
            // reach target
            paths[i][j] = 1;
            return paths[i][j];
        }
        // check if out of bounds
        if (i >= n || j >= m){
            return 0;
        }
        // check if visited
        if (paths[i][j] != -1) return paths[i][j];
        // continue 
        
        const rightPaths = dfs(i, j+1, n, m, paths);
        const bottomPaths = dfs(i+1, j, n, m, paths);
        paths[i][j] = rightPaths + bottomPaths;
        return paths[i][j];
    }
    const paths = Array(n).fill(0).map(()=>Array(m).fill(-1));
    dfs(0, 0, n, m, paths);
    return paths[0][0];
};