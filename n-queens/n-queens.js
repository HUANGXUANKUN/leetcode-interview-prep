/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const solve = (n, row, matrix, result, colSet, diaSet, antiDiaSet) =>{
        // base case
        // if row >= n, copy result reaching the end
        if (row >= n){
            const temp = [];
            for(const rowArr of matrix){
                // convert to string
                temp.push(rowArr.join(''));
            }
            console.log(temp)
            result.push(temp);
        }
        
        // iterate all cols, check if can place (check colSet, diaSet, antiDiaSet)
        for (let i = 0; i < n; i++){
            // check colSet, diagonal and antiDiagonal
            const diagonal_index = i+row;
            const anti_diagonal_index = i-row;
            if (colSet.has(i) || diaSet.has(diagonal_index) || antiDiaSet.has(anti_diagonal_index)){
                continue;
            }
            else{
                // can place;
                colSet.add(i);
                diaSet.add(diagonal_index);
                antiDiaSet.add(anti_diagonal_index);
                matrix[row][i] = 'Q'
                
                solve(n, row+1, matrix, result, colSet, diaSet, antiDiaSet);
                
                // backtrack
                matrix[row][i] = '.'
                colSet.delete(i);
                diaSet.delete(diagonal_index);
                antiDiaSet.delete(anti_diagonal_index);
            }
        }        
    }
    
    const matrix = Array(n).fill(0).map(()=>Array(n).fill('.'));
    const result = [];
    const colSet = new Set(), diaSet = new Set(), antiDiaSet = new Set();
    solve(n, 0, matrix, result, colSet, diaSet, antiDiaSet);
    return result;
};