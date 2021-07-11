/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const tokens = path.split('/')
    // console.log(tokens)
    const stack = []
    for (token of tokens){
        if (token == '..'){
            // pop
            if (stack.length >= 1) stack.pop()
        }else if (token == '' || token == '.'){
            continue
        }else{
            stack.push(token)
            
        }
    }
    const resultStr = '/' + stack.join('/')
    return resultStr;
};