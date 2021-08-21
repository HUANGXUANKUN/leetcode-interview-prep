/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    
    let left = 0;
    let right = m-1;
    let top = 0;
    let bottom = n-1;
    const res = [];
    
    while(left <= right && top <= bottom){

        
        // right
        if(left <= right && top <= bottom){
            for(let i = left; i <= right; i++) res.push(matrix[top][i]);
            top++;
        }
        // down
        if(left <= right && top <= bottom){
            for(let i = top; i <= bottom; i++) res.push(matrix[i][right]);
            right--;
        }
        // left
        if(left <= right && top <= bottom){
            for(let i = right; i >= left; i--) res.push(matrix[bottom][i]);
            bottom--;
        }
        // up
        if(left <= right && top <= bottom){
            for(let i = bottom; i >= top; i--) res.push(matrix[i][left]);
            left++;
        }
    }
    return res;
    
};