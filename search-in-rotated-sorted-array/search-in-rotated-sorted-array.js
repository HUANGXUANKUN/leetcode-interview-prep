/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // binary search
    let left = 0,
        right = nums.length-1;
    while(left < right){
        const mid = left + ((right-left)>>1);
        console.log([left, right], nums[mid]);
        // 4 5 6 7 1 2 3
        if (target == nums[mid]) return mid;
        else if (nums[mid] >= nums[left]){
            //  mid in left rotated section
            // check if target is between [left, mid - 1]
            if (target >= nums[left] && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            // mid is at right rotated section
            // check if target is between [mid, right]
            if (target < nums[left] && target > nums[mid]){
                left = mid + 1;
            }else{
                right = mid -1;
            }
        }
    }
    if (nums[left] == target) return left;
    return -1;
    
};