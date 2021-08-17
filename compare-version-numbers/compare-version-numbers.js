/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const tokensA = version1.split('.');
    const tokensB = version2.split('.');
    let n = tokensA.length,
        m = tokensB.length;
    let i = 0, j = 0;
    while(i < n || j < m){
        let valA = 0,
            valB = 0;
        if(i < n){
            valA = parseInt(tokensA[i]);
            i++;
        }
        if (j < m){
            valB = parseInt(tokensB[j]);
            j++;
        }
        if (valA == valB) continue;
        if (valA < valB){
            return -1;
        }else{
            return 1;
        }
    }
    return 0;
};