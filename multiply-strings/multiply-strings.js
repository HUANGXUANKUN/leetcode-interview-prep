/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const n = num1.length,
          m = num2.length;
    const arr = Array(n+m).fill(0);
    // console.log(num2);
    // console.log(num1);
    // eg 12 * 11
    /**
        12
       111
    ------
     00000
         2
     -----
     0002
       12
    ------
     00132
      12
     -----
     01332
    **/
    for (let i = n-1; i >= 0; i--){
        for (let j = m-1; j >= 0; j--){
            // multiply digit
            const a = parseInt(num1[i]), b = parseInt(num2[j]);
            const mult = a * b; 
            // get the previous digit sum
            const prevSum = arr[i+j+1];
            const sum = mult + prevSum;
            const carry = parseInt(sum / 10);
            const val = sum % 10;
            arr[i+j+1] = val;
            arr[i+j] += carry;
            // console.log([mult, carry, val])
            // console.log(arr);
        }
    }
    let str = arr.join('');
    // remove leading zero
    str = str.replaceAll(/(^0+)/g, '');
    if (str.length == 0) return '0';
    return str;
    
};