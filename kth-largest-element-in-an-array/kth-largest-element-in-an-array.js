/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // use quick select
    
    const quickSelect = (nums, k, left, right) => {
        // console.log(nums)
        
        // console.log("left = " + left + " right = " + right) ;
        
        if (left == right){
            return nums[left];
        }
        // get random pivot
        const randomPivot = left + Math.floor(Math.random() * (right - left + 1));
        // console.log("randomPivot = " + randomPivot)
        
        
        // partition to get new pivot
        const newPivot = partition(nums, randomPivot, left, right);
        // console.log("newPivot = " + newPivot)
        
        // if new pivot == k-1, return 
        if (newPivot == k-1){
            return nums[k-1];
        }
        // if new pivot < k-1, left = new pivot + 1
        else if (newPivot < k-1){
            left = newPivot + 1
        }
        // if new pivot > k-1, right = new pivot - 1
        else{
            right = newPivot - 1;
        }
        return quickSelect(nums, k, left, right);
    }
    
    const partition = (nums, selectedPivot, left, right) => {
        // swap the nums[selectedPivot] to last
        let pivotValue = nums[selectedPivot];
        // swap
        nums[selectedPivot] = nums[right];
        nums[right] = pivotValue;
        let swapIndex = left;
        for (let i = left; i < right; i++){
            if(nums[i] > pivotValue){
                // swap
                [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
                swapIndex++;
            }
        };
        // console.log("afteriteration = " + nums);
        
        // swapback
        [nums[right], nums[swapIndex]] = [nums[swapIndex], nums[right]];
        // console.log("swapped back = " + nums)
        
        return swapIndex;
    }
    return quickSelect(nums, k, 0, nums.length-1);
};