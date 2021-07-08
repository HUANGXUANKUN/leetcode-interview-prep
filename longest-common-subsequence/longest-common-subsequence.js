/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if(text2.length > text1.length){
        return longestCommonSubsequence(text2, text1);
    }
    const n = text1.length, m = text2.length;
    if(n == 0 || m == 0) return 0;
    
    let prevRow = Array(m+1).fill(0); 
    // when i, prevRow[j-1] = commob subseq of text1[1..i-1] and text2[1..j-1]
    // when i, prevRow[j] = commob subseq of text1[1..i-1] and text2[1..j]
    // when i, currRow[j-1] = commob subseq of text1[1..i] and text2[1..j-1]
    
    for (let i = 1; i <= n; i++){
        let currRow = Array(m+1).fill(0); 
        for (let j = 1; j <= m; j++){
            // check text1 i-1 and text2 j-1
            if (text1[i-1] == text2[j-1]){
                currRow[j] = 1 + prevRow[j-1];
            }
            else{
                currRow[j] = Math.max(prevRow[j], currRow[j-1]);
            }
        }
        prevRow = currRow; // update
    }
    return prevRow[m] // com subseq of text1[1...n] and text2[1...m]
};