/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const transpose = (matrix) => {
        const n = matrix.length;
        for (let i = 0; i < n; i++){
            for (let j = 0; j <= i; j++){
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
        console.log(matrix);
    }
    const revert = (matrix) => {
        const n = matrix.length;
        for (let i = 0; i < n; i++){
            for (let j = 0; j < (n >> 1); j++){
                [matrix[i][j], matrix[i][n-1-j]] = [matrix[i][n-1-j], matrix[i][j]];         
            }
        }
        console.log(matrix);
    }
    transpose(matrix);
    revert(matrix);

};