/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    // trim head == tail
    while (nums.length >= 2){
        if (nums[nums.length-1] == nums[0]){
            nums.pop()
        }else{
            break
        }
    }
    
    let left = 0, right = nums.length-1;
    // let count = 0;
    while (left < right){
        // count++;
        const mid = left + Math.floor(((right-left) /2));
        console.log("left  " + left + " right = " + right)
        if (target == nums[mid]){
            return true;
        }
        // check if mid in left section
        if (nums[mid] >= nums[left]){
            // check if target to the left of mid
            if (target >= nums[left] && target < nums[mid]){
                right = mid - 1; // left target mid | right
            }else{
                left = mid + 1; // left mid  target right
            }
        }
        // if mid in right section
        else{
            // check if target to the right of mid
            if (target < nums[left] && target > nums[mid]){
                // left  | mid target right
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    
    return nums[left] == target
};