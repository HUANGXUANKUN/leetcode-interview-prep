/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const tokens = path.split('/');
    const stack = [];
    console.log(tokens)
    for (const token of tokens){
        // case to ignore
        if (token == '/' || token == '' || token =='.'){
            continue;
        }
        if (token == '..'){
            // remove one from stack
            stack.pop();
        }
        else{
            stack.push(token);
        }
        // console.log(stack)
    }
    return '/' + stack.join('/');
    
};