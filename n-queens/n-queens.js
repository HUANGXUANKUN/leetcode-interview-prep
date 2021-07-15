/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // n-queen
    
    const solve = (n, row, colSet, diaSet, antiDiaSet, matrix, result) => {
        // base case
        if (row >= n){
            // print result
            const temp = [];
            for (line of matrix){
                temp.push(line.join(''));
            }
            result.push(temp);
        }
        
        // iterate all columns
        for (let col = 0; col < n; col++){
            // check if available
            const diaIndex = col+row;
            const antiDiaIndex = col-row;
            if (colSet.has(col) || diaSet.has(diaIndex) || antiDiaSet.has(antiDiaIndex)){
                continue; // cannot place
            }
            
            // place
            matrix[row][col] = 'Q'
            colSet.add(col);
            diaSet.add(diaIndex);
            antiDiaSet.add(antiDiaIndex);
            
            // dp
            solve(n, row+1, colSet, diaSet, antiDiaSet, matrix, result);
            
            // backtrack
            matrix[row][col] = '.'
            colSet.delete(col);
            diaSet.delete(diaIndex);
            antiDiaSet.delete(antiDiaIndex);
        }
    }
    
    const result = [];
    const matrix = Array(n).fill(0).map(()=>Array(n).fill('.'))
    const colSet = new Set(),
          diaSet = new Set(),
          antiDiaSet = new Set();
    solve(n, 0, colSet, diaSet, antiDiaSet, matrix, result);
    return result;

    
};