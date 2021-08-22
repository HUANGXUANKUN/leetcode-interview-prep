/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const open = [];
    const res = s.split('');
    for(let i = 0; i < res.length; i++){
        const curr = res[i];
        if(curr == '('){
            open.push(i);
        }else if (curr == ')'){
            if(open.length > 0){
                open.pop();
            }else{
                res[i] = ''; // not included
                continue;
            }
        }
    }
    // remove remaining extra opening 
    for (let i = 0; i < open.length; i++){
        res[open[i]] = '';
    }
    return res.join('');
    
};