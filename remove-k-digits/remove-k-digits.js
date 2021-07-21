/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(nums, k) {
    // remove k digit
    // use stack
    // compare stack[-1] with nums[i]
    // if stack[-1] > nums[i], remove stack[-1]
    // else push nums[i] to stack, i++
    
    let stack = [];
    let i = 0;
    while (i < nums.length){
        const curr = Number(nums[i]);
        if (stack.length > 0 && stack[stack.length-1] > curr && k > 0){
            // remove
            stack.pop();
            k--;
        }else{
            stack.push(curr);
            i++;
        }
    }
    // if k > 0
    while (k > 0){
        stack.pop();
        k--;
    }
    // console.log(stack);
    let rawStr = stack.join('');
    // console.log(rawStr)
    const regex = /^0+/g;
    rawStr = rawStr.replace(regex, "");
    console.log(rawStr)
    if (rawStr == "") return "0";
    return rawStr;
    
};