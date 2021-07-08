/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const n = a.length;
    const m = b.length;
    const result = [];
    
    // reverse a and b
    let i = n-1;
    let j = m-1
    let carry = 0;
    let sum = 0;
    while (i >= 0 || j >= 0){
        let valueA = 0, valueB = 0;
        if (i >= 0){
            valueA = Number(a[i]);
            i--;
        }
        if (j >= 0){
            valueB = Number(b[j]);
            j--;
        }
        
        let tempSum = valueA + valueB + carry;
        if (tempSum >= 2){
            tempSum %= 2;
            carry = 1;
        }else{
            carry = 0;
        }
        result.push(tempSum);
    }
    if (carry == 1){
        result.push(1);
    }
    return result.reverse().join('');
};