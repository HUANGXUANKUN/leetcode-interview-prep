/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    const n = mat.length,
          m = mat[0].length;
    // binary search
    let rowStart = 0, rowEnd = n-1;
    let colStart = 0, colEnd = m-1;
    while(rowStart < rowEnd || colStart < colEnd){
        // base case, check
        const rowMid = rowStart + ((rowEnd - rowStart) >> 1);
        const colMid = colStart + ((colEnd - colStart) >> 1);
        // console.log([rowStart, rowEnd, colStart, colEnd])
        // console.log([rowMid, colMid]);
        // check if peak
        const value = mat[rowMid][colMid];
        let leftVal = -1, rightVal = -1, topVal = -1, bottomVal = -1;
        if (rowMid > 0) topVal = mat[rowMid-1][colMid];
        if (rowMid < n-1) bottomVal = mat[rowMid+1][colMid];
        if (colMid > 0) leftVal = mat[rowMid][colMid-1];
        if (colMid < m-1) rightVal = mat[rowMid][colMid+1];
        
        // console.log("top bottom = ", [topVal, bottomVal]);
        // console.log("left right = ", [leftVal, rightVal]);
        
        // check peak
        if (Math.max(value, leftVal, rightVal, topVal, bottomVal) == value){
            return [rowMid, colMid];
        }
        
        // check left right
        if(Math.max(value, leftVal, rightVal, bottomVal, topVal) == leftVal){
            colEnd = colMid - 1; // left max
        }else if (Math.max(value, leftVal, rightVal, bottomVal, topVal) == rightVal){
            colStart = colMid + 1; // right max
        }
        // check top bottom
        else if(Math.max(value, bottomVal, topVal, leftVal, rightVal) == topVal){
            rowEnd = rowMid - 1; // top max
        }else if (Math.max(value, bottomVal, topVal, leftVal, rightVal) == bottomVal){
            rowStart = rowMid + 1; // btm max
        }// else val is peak
    }
    return [rowStart, colStart];
    /**
    [[47,30,35,8,25],
     [6,36,19,41,40],
     [24,37,13,46,5],
     [3,43,15,50,19],
     [6,15,7,25,18]]
    **/
};