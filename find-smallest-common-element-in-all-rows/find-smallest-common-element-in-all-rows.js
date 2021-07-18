/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    // compare lowest number of all mat
    
    // if row current num < lowest, next number
    // if ==, check next
    // if row current > lowest, update lowest
    
    // if all rows same, return that number
    
    let lowest = mat[0][0];
    const n = mat.length;
    const m = mat[0].length;
    let i = 0;
    const pointers = Array(n).fill(0);
    let nextLoop = true;
    while (nextLoop){
        nextLoop = false;
        for (let i = 0; i < n; i++){
            if (mat[i][pointers[i]] == lowest){
                continue;
            }
            nextLoop = true;
            while(pointers[i] < m && mat[i][pointers[i]] < lowest){
                pointers[i] += 1;
            }
            // check pointer
            if (pointers[i] < m){
                lowest = Math.max(lowest, mat[i][pointers[i]]);  
            }else{
                // console.log(pointers)
                // console.log(lowest)
                return -1; // no common
            }    
        }
    }
    return mat[0][pointers[0]];
};