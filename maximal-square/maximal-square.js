/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // check left, topleft and top
    // find the min
    const n = matrix.length,
          m = matrix[0].length;
    let maxLen = 0;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            matrix[i][j] = Number(matrix[i][j]);
        }
    }
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            // check curr
            if (matrix[i][j] == 1){
                minLen = 0;
                if (i >= 1 && j >=1) minLen = Math.min(matrix[i-1][j-1], matrix[i-1][j], matrix[i][j-1])
                matrix[i][j] = 1 + minLen;
                maxLen = Math.max(maxLen, matrix[i][j])
            }
        }
    }
    
    console.log(matrix)
    return maxLen*maxLen;
    
};