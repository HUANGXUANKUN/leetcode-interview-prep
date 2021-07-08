/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;
    // check first row 
    for (let i = 0; i < m; i++){
        if (matrix[0][i] == 0){
            firstRowHasZero = true;
            break;
        }
    }
    // check first col 
    for (let i = 0; i < n; i++){
        if (matrix[i][0] == 0){
            firstColHasZero = true;
            break;
        }
    }
    // check matrix[2..n][2..m] is zero, if yes mark the first col or first row
    for (let i = 1; i < n; i++){
        for (let j = 1; j < m; j++){
            if (matrix[i][j] == 0){
                matrix[0][j] = 0 // mark first row -> whole col is zero
                matrix[i][0] = 0 // mark first col -> whole row is zero
            }
        }
    }
    
    // iterate matrix to assign zero
    for (let i = 1; i < n; i++){
        for (let j = 1; j < m; j++){
            if (matrix[i][0] == 0 || matrix[0][j] == 0){
                matrix[i][j] = 0
            }
        }
    }
    
    // iterate first col/first row to assign zero
    if (firstRowHasZero){
        for(let i = 0; i < m; i++){
            matrix[0][i] = 0
        }
    }

    if (firstColHasZero){
        for(let i = 0; i < n; i++){
            matrix[i][0] = 0
        }
    }
};