/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // build lookup table
    
    // build value
    const lookUp = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const loopUpTable = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500:'D',
        900: 'CM',
        1000: 'M'
    }
    // start from the largest
    let lookUpIndex = lookUp.length-1;
    const result = [];
    while(num != 0){
        // find the right lookup value
        while (lookUp[lookUpIndex] > num){
            lookUpIndex-=1;
        }
        const lookUpNum = lookUp[lookUpIndex];
        const count = Math.floor(num / lookUpNum);
        num = num % lookUpNum;
        result.push(loopUpTable[lookUpNum].repeat(count));
    }
    return result.join('');
};