/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = []
    const arr = s.split('');
    for (let i = 0; i < arr.length; i++){
        const curr = arr[i];
        if (curr == '('){
            stack.push(i);
        }else if (curr == ')'){
            // check if top of stack is (
            if (stack.length == 0 || arr[stack[stack.length-1]] == ')'){
                // remove this )
                arr[i] = '';
            }else{
                // top is stack is (
                stack.pop();
            }
        }
    }
    // for all remaining in stack, remove too
    for (const index of stack){
        arr[index] = "";
    }
    return arr.join('');
    
};