/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const numStr = nums.map(num => num.toString());
    numStr.sort((a,b) => {
        const combinedA = a+b;
        const combinedB = b+a;
        if (combinedA > combinedB){
            return -1;
        }
        if (combinedA < combinedB){
            return 1;
        }
        return 0;
    })
    const joinedStr = numStr.join('');
    if (joinedStr[0] == '0') return '0';
    return joinedStr;
};