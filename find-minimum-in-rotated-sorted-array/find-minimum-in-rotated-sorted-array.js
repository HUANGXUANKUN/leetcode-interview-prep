/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 4 5 6 7 1 2
    let left = 0, right = nums.length-1;
    if (nums[right] > nums[0]){
        return nums[0];
    }
    
    while(left < right){
        const mid = left + ((right-left) >> 1);
        // in case of all sorted
        
        // check next
        if(nums[mid] > nums[mid+1]){
            return nums[mid+1];
        }
        // check prev, return mid
        if(nums[mid-1] > nums[mid]){
            return nums[mid];
        }

        // check mid is in left/right rotated section 
        if(nums[mid] > nums[0]){
            // in left section, check right
            left = mid+1;
        }else{
            // in right section, check left
            right = mid - 1;
        }
    }
    return nums[left];
    
};