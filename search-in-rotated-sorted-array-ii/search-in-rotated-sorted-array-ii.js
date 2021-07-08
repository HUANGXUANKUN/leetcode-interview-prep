/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length -1;
    while (left < right){
        const mid = left + (right-left >> 1);
        console.log("left = " + left + " right = " + right + " mid " + mid)
        if (nums[mid] == target){
            return true;
        }
        if (nums[mid] == nums[left]){
            left++;
            continue;
        }
        // check target position
        if (target >= nums[left]){ //target at left section
            console.log("target at left")
            // left mid target.|.right
            if(nums[mid] > nums[left] && target > nums[mid]){ // mid at left section
                left = mid+1;
            }else{// left mid target.|.right
                right = mid-1; // left target mid | right
            }
        }else{ //target at right section
            if (nums[mid] < nums[left] && target < nums[mid] ){ //left  |. target  mid right
                right = mid - 1;
            }else{
                left = mid+1;
            } 
        }
    }
    console.log(left)
    
    return nums[left] == target;
    
};