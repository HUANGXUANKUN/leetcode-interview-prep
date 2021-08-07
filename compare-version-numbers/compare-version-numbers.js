/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // iterate both version1 and version2
    // remove trailling zero for each values
    const tokensA = version1.split('.');
    const tokensB = version2.split('.');
    
    for (let i = 0; i < Math.max(tokensA.length, tokensB.length); i++){
        let valueA = 0,
            valueB = 0;
        if (i < tokensA.length){
            const strA = tokensA[i].replace(/^0+/,'');
            // console.log(tokensA[i], strA);
            if (strA.length > 0) valueA = parseInt(strA);
        }
        if (i < tokensB.length){
            const strB = tokensB[i].replace(/^0+/,'');
            // console.log(tokensB[i], strB);
            if (strB.length > 0) valueB = parseInt(strB);
        }
        // compare 
        // console.log([valueA, valueB]);
        if (valueA < valueB) return -1;
        else if (valueA > valueB) return 1;
    }
    return 0;
};