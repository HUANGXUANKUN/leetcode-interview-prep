/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let d = Math.abs(dividend);
    const dv = Math.abs(divisor);
    let output = 0;
    
    while(d >= dv){
        let temp = dv;
        let multi = 1;
        while(temp <= d){
            d -= temp;
            output += multi;
            multi += multi;
            temp += temp;
        }
    }
    
    if ((dividend < 0 && divisor >= 0) || (divisor < 0 && dividend >= 0)){
        output = -output;
    }
    output = Math.max(-2147483648, output);
    output = Math.min(2147483647, output);
    
    return output;
};