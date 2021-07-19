/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1];
    let currLen = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        // if (
        if (char == '('){
            stack.push(i);
        }else{
            stack.pop(); // pop prev (
            if (stack.length > 0){
                // calculate len
                maxLen = Math.max(maxLen, i - stack[stack.length-1]);
            }else{
                // nothing, add break point
                stack.push(i);
            }
        }
    }
    return maxLen;
    
};