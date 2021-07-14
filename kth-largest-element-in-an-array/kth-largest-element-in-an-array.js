/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const quick_select = (nums, left, right) => {
        const randomPivot = Math.floor(Math.random() * (right-left+1)) + left;
        // const randomPivot = right;
        
        // console.log(nums)
        // console.log("left right = " + [left, right])
        // console.log("random pivot = " + randomPivot)
        const partitionPivot = partition(nums, left, right, randomPivot);
        
        // console.log("parition pivot = " + partitionPivot)
        // console.log(nums)
        // console.log("")
        
        if (partitionPivot == nums.length-k){
            console.log("found1!!!!")
            return nums[partitionPivot];
        }else if(partitionPivot < nums.length-k){
            return quick_select(nums, partitionPivot+1, right)
        }else{
            return quick_select(nums, left, partitionPivot - 1);
        }
    } 
    
    const partition = (nums, left, right, pivot) => {
        const pivotValue = nums[pivot];
        // console.log("pivot value = " + pivotValue);
        // swap with right
        [nums[right], nums[pivot]] = [nums[pivot], nums[right]];
        let addPivot = left;
        
        // not consider the last element
        for (let i = left; i <= right-1; i++){
            if (nums[i] < pivotValue){
                // swap
                [nums[i], nums[addPivot]] = [nums[addPivot], nums[i]];
                addPivot +=1;
                // console.log("num = " + nums[i] + " smaller than, new pivot point " + addPivot)
            }else{
                // console.log("num = " + nums[i] + " larger than, new pivot point " + addPivot)
                
            }
            
        }
        // swap right with addPivot postition
        // console.log("after swapping");
        // console.log(nums);
        [nums[right], nums[addPivot]] = [nums[addPivot], nums[right]];
        return addPivot;
    }
    const result = quick_select(nums, 0, nums.length-1)
    console.log(nums)
    console.log(result)
    return result
    
};