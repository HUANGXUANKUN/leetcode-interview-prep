/**
 * @param {string} s
 * @return {string}
 */

// 1[3[a2[c]]]
var decodeString = function(s) {
    const strStack = [];
    const countStack = [];
    s = '[' + s + ']';
    let str = '';
    let num = 1;
    for (const curr of s){
        if(curr == '['){
            strStack.push(str); // store this str
            countStack.push(num); 
            num = 0;
            str = '';
        }else if (curr == ']'){
            // repeat
            const prevCount = countStack.pop();
            const prevStr = strStack.pop();
            str = prevStr + str.repeat(prevCount);
        }
        else if(isNaN(curr)){
            // console.log("this is a char - ")
            // not a number
            str = str + curr;
            num = 0;
        }else{
            num = num * 10 + parseInt(curr);
            // console.log("num - " + num)
        }
        // console.log("curr: ", curr, num);
        // console.log("str: " + str);
        // console.log(countStack);
        // console.log(strStack);
        
    }
    return str;
};