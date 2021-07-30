/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0,
        right = nums.length-1;
    while (left < right-1){
        const mid = left + ((right-left) >> 1);
        // size >= 3
        if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]){
            return mid;
        }
        else if (nums[mid] <= nums[mid+1]){
            // [1, 2, 2]
            left = mid;
        }else {
            // [3, 2]
            // nums[mid] > nums[mid+1]
            right = mid;  
        }     
    }
    if (nums[left] > nums[right]) return left;
    return right;
    
    
};