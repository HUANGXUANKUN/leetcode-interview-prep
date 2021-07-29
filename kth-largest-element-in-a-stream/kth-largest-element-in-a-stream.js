/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = [];
    this.k = k;
    for (const num of nums){
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    // push to minHeap if size < k
    if (this.minHeap.length < this.k){
        // push
        this.minHeap.push(val);
        this.minHeap.sort((a,b)=>b-a); // decreasing order
    }else if (val > this.minHeap[this.minHeap.length-1]){
        this.minHeap.pop(); // pop the min
        this.minHeap.push(val);
        this.minHeap.sort((a,b)=>b-a); // decreasing order
    }
    // console.log(this.minHeap);
    return this.minHeap[this.minHeap.length-1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */