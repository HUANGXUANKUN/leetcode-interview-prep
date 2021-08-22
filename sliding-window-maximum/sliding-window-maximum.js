/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const maxQueue = [];
    const res = [];
    
    for(let right = 0; right < n; right++){
        const curr = nums[right];
        while(maxQueue.length > 0 && curr > nums[maxQueue[maxQueue.length-1]]){
            maxQueue.pop();
        }
        // maxQueue only contains value >= curr
        // pop
        maxQueue.push(right);
        
        // [1 2 3 4]
        if(maxQueue[0] <= right - k){ // right = 3, k = 2, idx to be delete = >3-2
            maxQueue.shift();
        }
        
        if(right >= k-1){
            res.push(nums[maxQueue[0]]); // the max is at maxQueue[0]
        }
        // console.log(maxQueue)
    }
    return res;
    
};