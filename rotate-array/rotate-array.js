/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const reverse = (nums, left, right) => {
        while(left < right){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left ++;
            right --;
        }
    }
    // 1 2 3 4 5 6 7
    // k = 3
    // 5 6 7 1 2 3 4
    // 4 3 2 1 7 6 5 (reverse inner left and inner right)
    // 5 6 7 1 2 3 4 (reverse whole)
    const n = nums.length;
    k = k % n;
    if (k == 0 || n == 0) return nums;
    const swapIndex = n - k;
    // reverse nums[0, swapIndex] 
    reverse(nums, 0, swapIndex-1);
    reverse(nums, swapIndex, n-1);
    reverse(nums, 0, n-1);
};