/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // push tuple of ['(', index] into stack
    // remove valid pair of ()
    // for all remaining in stack, marked as removed
    const stack = [];
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        if (char == '('){
            // push to stack
            stack.push([char, i]);
        }else if (char == ')'){
            // check if valid
            if (stack.length > 0 && stack[stack.length-1][0] == '('){
                // valid )
                stack.pop();
            }else{
                stack.push([char, i]); // invalid 
            }
        }
        // console.log("at i = " + i + " stack = " + stack)
    }
    const removeIndex = stack.map(([char, index])=>index);
    // console.log(removeIndex);
    const removeSet = new Set(removeIndex);
    const result = [];
    for (let i = 0; i < s.length; i++){
        if (removeSet.has(i)) continue;
        result.push(s[i]);
    }
    return result.join('');
    
};