/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const transpose = (matrix) =>{
        const n = matrix.length, m = matrix[0].length;
        for(let i = 0; i < n; i++){
            for (let j = 0; j <= i; j++){
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; 
            }
        }
    }
    
    const revert = matrix => {
        const n = matrix.length, m = matrix[0].length;
        for(let i = 0; i < n; i++){
            for(let j = 0; j < Math.floor(m/2); j++){
                [matrix[i][m-1-j], matrix[i][j]] = [matrix[i][j], matrix[i][m-1-j]]
            }
        }
    }
    
    transpose(matrix);
    revert(matrix);
};