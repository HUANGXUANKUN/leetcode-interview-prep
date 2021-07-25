/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // use stack to mark previous valid (, 
    
    // if empty, mark curr i as previous valid (
    const stack = [-1];
    let longestLen = 0;
    
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        if (char == '('){
            stack.push(i);
        }else if (char == ')'){
            // pop previous (
            stack.pop();
            if (stack.length > 0){ // valid )
                // there is valid 
                const len = i - stack[stack.length - 1];
                longestLen = Math.max(longestLen, len);
            }else{
                // empty, invalid )
                stack.push(i);
            }
        }
    }
    return longestLen;
};