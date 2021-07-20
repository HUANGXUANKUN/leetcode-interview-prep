/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        const curr = nums[i];
        // check if existed
        if(map.has(curr)){
            if (i - map.get(curr) <= k) return true;
        }
        map.set(curr, i);
    }
    return false;
};