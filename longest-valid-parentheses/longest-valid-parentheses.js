/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxAns = 0;
    const stack = [-1];
    for (let i = 0; i<s.length; i++){
        // left bracket, push
        if (s[i] =='('){
            stack.push(i);
        }
        
        // right bracket, pop and find max
        else{
            // remove top from stack
            stack.pop(); //stack always has one index 
            // keep at least 1 element in stack
            if (stack.length ==0){
                stack.push(i)
            }else{
                // there is a valid left bracket in stack, check it out
                maxAns = Math.max(maxAns, i - stack[stack.length - 1])
            }
        }
    }
    return maxAns
    
};