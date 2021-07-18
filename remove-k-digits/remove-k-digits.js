/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    // compare leftMost char to the right char
    const resultStack = [];
    const numString = num.toString();
    if(k >= numString.length) return '0';
    let i = 0;
    let reduced = 0;
    while (i < numString.length && reduced < k){
        // compare top of resultStack to curr
        const curr = numString[i];
        if (resultStack.length == 0){
            if (curr != '0'){
                resultStack.push(curr) 
            }
            i++;
        }else{
            // compare top to curr
            if ( resultStack.length > 0 && resultStack[resultStack.length-1] > curr){
                // remove top
                // console.log("removed " + resultStack[resultStack.length-1])
                resultStack.pop();
                reduced += 1;
            }else{
                resultStack.push(curr);
                i++;
            }
        } 
        // console.log("at i = " + i + " curr = " + curr)
        // console.log(resultStack)
    }
    
    // console.log(resultStack)
    // console.log("i = " + i)
    // add remaining
    for (;i < numString.length; i++){
        if (resultStack.length == 0 && numString[i] == '0'){
            continue;
        }else{
            resultStack.push(numString[i]); 
        }
    }
    
    // if reduced < k
    while (resultStack.length > 0 && reduced < k){
        resultStack.pop();
        reduced += 1;
    }
    
    console.log(resultStack)
    // remove trailing zero
    if(resultStack.length == 0) return '0';
    return resultStack.join('');
};