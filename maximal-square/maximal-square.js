/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let maxLength = 0;
    // convert to number
    for (const row of matrix){
        for (let j = 0; j < m; j++){
            row[j] = Number(row[j])
        }
    }
    // console.log(matrix)
    
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (i == 0 || j == 0){
                maxLength = Math.max(maxLength, matrix[i][j])
            }
            else{
                // check topleft, left and top
                const minValue = Math.min(matrix[i-1][j-1], matrix[i-1][j], matrix[i][j-1])
                if (matrix[i][j] == '1'){
                    matrix[i][j] += minValue;
                }
                maxLength = Math.max(maxLength, matrix[i][j])
            }
        }
    }
    
    // console.log(matrix)
    return maxLength**2;
};