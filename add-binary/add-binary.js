/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const n = a.length;
    const m = b.length;
    if (m < n) return addBinary(b, a)
    
    let num1 = a.split('').reverse();
    let num2 = b.split('').reverse();
    let result = [];
    let carry = 0;
    
    // a.len <= b.len
    for (let i = 0; i < m; i++){
        let val1 = 0,
            val2 = Number(num2[i]);
        
        if (i < n){
            val1 = Number(num1[i]);
        }
        
        let tempSum = val1 + val2 + carry;
        carry = 0;
        if(tempSum >= 2){
            tempSum %= 2;
            carry = 1;
        }
        result.push(tempSum);
    }
    
    if(carry > 0) result.push(1);
    return result.reverse().join('');
};