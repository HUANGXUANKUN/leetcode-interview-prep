/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const n = matrix.length;
    const m = matrix[0].length;
    let i = n-1;
    let j = 0;
    // start from left bottom, moving up or right
    while(i >= 0 && j < m){
        const curr = matrix[i][j];
        if (target == curr){
            return true; // found
        }
        else if (target < curr){
            // all element on the right are not, move up
            i -= 1
        }
        else{
            // target is not at the same columns, move right
            j += 1;
        }
    }
    return false;
};