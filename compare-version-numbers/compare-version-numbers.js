/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const tokenA = version1.split('.');
    const tokenB = version2.split('.');
    const maxN = Math.max(tokenA.length, tokenB.length);
    for (let i = 0; i < maxN; i++){
        let strA = '0', strB = '0';
        if (i < tokenA.length) strA = tokenA[i];
        if (i < tokenB.length) strB = tokenB[i];
        // remove leading zero
        // strA = strA.replace(/^0+/, '')
        // strB = strB.replace(/^0+/, '')
        // if (strA.length == 0) strA = '0'
        // if (strB.length == 0) strB = '0'
        // console.log([strA, strB])
        // compare
        if (parseInt(strA) < parseInt(strB)) return -1;
        if (parseInt(strA) > parseInt(strB)) return 1;
    }
    // all equal
    return 0;
    
};