/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // use a queue to record curr window max position
    // queue[0] is max
    // if queue[0] < left, pop queue[0]
    const maxQueue = [];
    const res = [];
    for(let i = 0; i < nums.length; i++){
        const curr = nums[i];
        while(maxQueue.length > 0 && nums[maxQueue[maxQueue.length-1]] < curr){
            // pop if last element < curr
            maxQueue.pop();
        }
        maxQueue.push(i);
        // check if need pop
        if(i >= k && maxQueue[0] <= i - k){ // eg i = 3, k =3, i-k = 0
            maxQueue.shift();
        }
        // console.log("i = " + i, maxQueue)
        if(i >= k-1){
            res.push(nums[maxQueue[0]]);
        }
    }
    return res;
};