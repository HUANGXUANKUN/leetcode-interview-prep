/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // [|1|, |2|, 3, 4, 5, 6, 6, 7, |8|, |9|, 10]
    // k = 10
    // [1, 9], [2, 8], [3, 7], [4, 6]
    
    nums.sort((a, b) => a-b); 
    let count = 0;
    let left = 0, right = nums.length-1;
    while(left < right){ // 
        const tempSum = nums[left] + nums[right];
        if(tempSum == k){
            count++;
            left ++;
            right --;
        }else if (tempSum < k){
            left++;
        }else{
            // tempSum > k
            right--;
        }
    }
    return count;
};