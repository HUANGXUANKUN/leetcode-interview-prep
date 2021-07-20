/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // convert Interger to roman
    // create lookup list for int to roman
    const map = {
        1000 :"M",
        900 :"CM",  
        500 :"D",
        400 :"CD", 
        100 :"C",
        90 :"XC",
        50 :"L",
        40 :"XL",
        10 :"X",
        9 :"IX",
        5 :"V",
        4 :"IV",
        1 :"I",  
    }
    const lookup = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let i = 0;
    const result = []
    // just divide by the first occurrence 
    while (num != 0){
        // check the first one to divide
        while (num < lookup[i]){
            i++;
        }
        const times =  Math.floor(num / lookup[i])
        num %= lookup[i];
        for(let j = 0; j<times; j++){
            result.push(map[lookup[i]]);
        }
    }  
    // console.log(result)
    return result.join('');
};