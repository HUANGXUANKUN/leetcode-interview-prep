/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const lookupSingle = {
        1:'I',
        5:'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    }
    const lookupDouble = {
        4: 'IV',
        9: 'IX',
        40: 'XL',
        90: 'XC',
        400: 'CD',
        900: 'CM'
    }
    let i = 0;
    let temp = [];
    let result = [];
    while (num!=0){
        let digit = num%10;
        const multi = 10 ** i;
        console.log("mutipler:" + multi)
        num = Math.floor(num/10);
        while (digit != 0){
            console.log(digit)
            if (digit == 4 || digit == 9){
                const value = multi*digit;
                // console.log(value)
                const symbol = lookupDouble[value];
                temp.push(symbol);
                digit = 0;
            }
            else if (digit >= 5){
                // add 5 
                const value = multi*5;
                const symbol = lookupSingle[value];
                temp.push(symbol)
                digit = digit % 5;         
            }else{
                // add 1
                const value = multi*1;
                const symbol = lookupSingle[value];
                temp.push(symbol)
                digit--;
            }
 
        }
        console.log(temp.join(''))
        result.push(temp.join(''))
        temp.length = 0
        i++;
    }
    
    return result.reverse().join('');
};