/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // use quick select
    const quickSelect = (nums, left, right, k) =>{
        // get a random index [left, right]
        const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
        // console.log(nums);
        // console.log([left, right, randomIndex]);
        const pivot = partition(nums, left, right, randomIndex);
        // console.log("pivot = " + pivot);
        // console.log(nums);
        
        if (pivot == k - 1){
            // console.log("found!")
            return nums[pivot];
        }else if (pivot < k-1){
            // kth is in the right
            left = pivot + 1;
            return quickSelect(nums, left, right, k);
        }else{
            // kth is in the left
            right = pivot - 1;
            return quickSelect(nums, left, right, k);
        }
    }
    
    const partition = (nums, left, right, randomIndex) => {
        // swap randomIndex value to the last
        const value = nums[randomIndex];
        [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];
        let swapIndex = left;
        for(let i = left; i < right; i++){
            const curr = nums[i];
            if(curr >= value){
                // swap
                [nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]];
                swapIndex++;
            }
        };
        // swap randomIndex value with the swapIndex value
        [nums[swapIndex], nums[right]] = [nums[right], nums[swapIndex]];
        return swapIndex;
    }
    return quickSelect(nums, 0, nums.length-1, k);
    
};