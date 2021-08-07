/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // sort by values
    nums.sort((a, b) => {
        const sumA = parseInt('' + a+b);
        const sumB = parseInt('' + b+a);
        if (sumA > sumB) return -1;
        else if (sumA < sumB) return 1;
        return 0
    })
    // console.log(nums);
    const result = nums.join('');
    if (result[0] == '0') return '0';
    return result;
    
};