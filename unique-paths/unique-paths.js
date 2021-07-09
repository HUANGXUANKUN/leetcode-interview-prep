/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(n, m) {
    // dp
    const move = (n, m, i, j, dp) => {
        // console.log(i + " " + j)
        // base case
        if (i >= n || j>=m){
            return 0;
        }
        if(i == n-1 && j == m-1){
            // console.log("reaching the end")
            return 1;
        }
        //check if visited
        
        if(dp[i][j] != -1){
            return dp[i][j];
        }
        
        let pathFromCurrentCell = 0;
        // move right
        pathFromCurrentCell += move(n, m, i, j+1, dp)
        
        // move down
        pathFromCurrentCell += move(n, m, i+1, j, dp)
        dp[i][j] = pathFromCurrentCell;
        return dp[i][j]       
    }
    
    dp = Array(n).fill(-1).map(()=>Array(m).fill(-1)) 
    // console.log(dp)
    // dp[i][j] == -1 means not visited
    return move(n, m, 0, 0, dp);
    
};