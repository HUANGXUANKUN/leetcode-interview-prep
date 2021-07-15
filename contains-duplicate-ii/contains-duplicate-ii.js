/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // hashmap to record index
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        const curr = nums[i]
        // check duplicate 
        if (map.has(curr)){
            // check index
            if (i - map.get(curr) <= k){
                return true
            }
        }
        map.set(curr, i);
    }
    return false;
    
};