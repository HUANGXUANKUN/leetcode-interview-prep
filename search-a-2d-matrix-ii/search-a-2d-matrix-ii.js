/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // start from bottom left
    const n = matrix.length,
          m = matrix[0].length;
    let i = n-1, j = 0;
    while(i >= 0 && j < m){
        if (matrix[i][j] == target)return true;
        else if (matrix[i][j] < target){
            j++; // target larger, not in this column
        }else{
            i--; // target smaller, not in this row
        }
    }
    return false;
    
};