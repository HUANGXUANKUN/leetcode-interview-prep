/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    // compare the top digit in stack with curr digit
    if (k == 0) return num;
    const stack = [];
    let i = 0;
    while (i < num.length){
        const curr = num[i];
        if(stack.length > 0 && stack[stack.length-1] > curr && k > 0){
            stack.pop();
            k--;
        }else{
            stack.push(curr);
            i++;
        }
    }
    console.log(stack);  
    console.log(k);
    // if k > 0, pop
    while(k > 0 && stack.length > 0){
        stack.pop();
        k--;
    }
    let res = stack.join('').replace(/^0+/, '');
    if (res.length == 0) return '0';
    return res;
};