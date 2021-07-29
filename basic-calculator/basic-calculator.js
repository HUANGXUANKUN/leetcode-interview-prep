/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const calculate = (s) => {
        const stack = [];
        let currNum = 0;
        let powerTen = 0;
        for (let i = s.length-1; i>=0; i--){
            // console.log([...stack].reverse())
            // iterate from back
            const char = s[i];
            if (!isNaN(char)){
                // is a digit
                // console.log("char " + char + " is a digit");
                const num = parseInt(char);
                currNum += num * (10 ** powerTen)
                powerTen += 1;
            }
            else if (char == ')'){
                // just push
                stack.push(char);
            }else if (char == '('){
                stack.push(currNum);
                currNum = 0;
                powerTen = 0;
                const temp = myEval(stack);
                stack.push(temp);
            }else if (char == '+' || char == '-'){
                if (powerTen != 0){
                    stack.push(currNum);
                    currNum = 0;
                    powerTen = 0;
                }
                stack.push(char);
            }
        }
        if(powerTen!=0) stack.push(currNum); // push last number
        console.log([...stack].reverse())
        return myEval(stack);
    }
    
    const myEval = (stack) => {
        let res = 0;
        // get the first number
        if (stack[stack.length-1] != '-' && stack[stack.length-1] != '+'){
            // is not a sign, is a number
            res += stack.pop();
        } 
        // iterate until stack is empty or reach a ')'
        while (stack.length != 0){
            const sign = stack.pop();
            
            if (sign == ')') break;
            // sign is either + or -
            if (sign == '+') {
                const val = stack.pop();
                res += val;
            }
            else if (sign == '-') {
                const val = stack.pop() || 0;
                res -= val
            }
        }
        return res;
        
    }
    s = s.replaceAll(' ', ''); //remove space
    return calculate(s);
    
};