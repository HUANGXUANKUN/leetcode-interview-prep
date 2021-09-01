/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // split by .
    const token1 = version1.split('.');
    const token2 = version2.split('.');
    const n = token1.length,
          m = token2.length;
    let i = 0;
    while(i< n || i < m){
        let value1 = 0,
            value2 = 0;
        if(i < n) value1 = parseInt(token1[i]);
        if(i < m) value2 = parseInt(token2[i]);
        // console.log([value1, value2]);
        // compare
        if(value1 < value2) return -1;
        else if (value1 > value2) return 1;
        i++;
    }
    return 0;
};