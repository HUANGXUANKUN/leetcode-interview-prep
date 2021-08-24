/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const n = matrix.length,
          m = matrix[0].length;
    let i = n-1, j = 0
    while(i >= 0 && j < m){
        const curr = matrix[i][j];
        if (curr == target){
            return true;
        }
        if (curr < target){
            // next column
            j++;
        }else{
            // target < curr
            // top row
            i--;
        }
    }
    return false;
    
};