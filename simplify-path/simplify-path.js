/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const tokens = path.split('/');
    for (const token of tokens){
        // skip space, ..., .
        if (token == '' || token == '.'){
            continue;
        }else if (token == '..'){
            stack.pop();
        }else{
            stack.push(token);
        }
    }
    // console.log(stack);
    return '/' + stack.join('/');
    
};