/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    //replace all space
    s = s.replaceAll(' ','')
    // console.log(s)
    const stack = [];
    let currValue = 0;
    let prevSymbol = '+';
    let prevValue = 0;
    let sum = 0;
    for (let i = 0; i < s.length; i++){
        const curr = s[i];
        if (!isNaN(curr) && i != s.length-1){ // if is number of is not last element
            // is a number
            const num = Number(curr);
            currValue = currValue * 10 + num;
        }else{ // is symbol || last element
            if (i == s.length-1){
                // last element, convert to number
                const num = Number(curr);
                currValue = currValue * 10 + num;
            }
            // console.log('at i = ' + i + ' curr value = ' + currValue)
            // console.log('sum = ' + sum)
            // console.log("prevSymbol = " + prevSymbol)
            // is symbol
            // check prev symbol
            if (prevSymbol == '+'){
                sum += prevValue;
                prevValue = currValue;
            }else if (prevSymbol == '-'){
                sum += prevValue;
                prevValue = -currValue;
            }else if (prevSymbol == '*'){
                prevValue = prevValue * currValue;
            }else if (prevSymbol == '/'){
                prevValue = parseInt(prevValue / currValue);
            }
            currValue = 0;
            prevSymbol = curr;
        }      
    }
    // console.log("prev value = " + prevValue)
    sum += prevValue;
    return sum;
};