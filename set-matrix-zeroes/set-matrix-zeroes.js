/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // use first row and first col
    let firstRowZero = false,
        firstColZero = false;
    const n = matrix.length,
          m = matrix[0].length;
    
    // check first row
    for (let i = 0; i < m; i++){
        if (matrix[0][i] == 0){
            firstRowZero = true;
            break;
        }
    }
    // check first col
    for (let i = 0; i < n; i++){
        if (matrix[i][0] == 0){
            firstColZero = true;
            break;
        }
    }
    // check 1,1 to n,m, and update first row and first col
    for (let i = 1; i < n; i++){
        for (let j = 1; j < m; j++){
            if(matrix[i][j] == 0){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    // iterate 1,1 to n,m again, assign zero
    for (let i = 1; i < n; i++){
        for (let j = 1; j < m; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
                matrix[i][j] = 0;
            }
        }
    }
    // assign zero to first row and first col
    if (firstRowZero){
        // check first row
        for (let i = 0; i < m; i++){
            matrix[0][i] = 0;
        }
    }
    if (firstColZero){
        // check first row
        for (let i = 0; i < n; i++){
            matrix[i][0] = 0;
        }
    }
    
};