/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    // trim left == right
    while (nums.length > 1 && nums[0] == nums[nums.length-1]){
        nums.pop();
    }
    console.log(nums);
    // binary search
    let left = 0,
        right = nums.length -1;
    
    while (left < right){
        const mid = left + ((right-left) >> 1);
        // check if mid is in left section or right section
        if (nums[mid] == target){
            return true;
        }
        
        if (nums[mid] >= nums[left]){
            // in left section
            // if target in [left mid] 
            if (target >= nums[left] && target < nums[mid]){
                right = mid - 1;
            }else{
            // target in [mid, right]
                left = mid + 1;
            }
        }else{
            // in right section
            // if target in (mid right)
            if (target < nums[left] && target > nums[mid]){
                left = mid + 1;
            }
            // target in (left, mid)
            else{
                right = mid - 1;
            }
        }
    }
    if (nums[left] == target) return true;
    return false;
};