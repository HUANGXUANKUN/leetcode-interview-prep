/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    // insertion sort
    this.arr = [];
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // console.log("insert num = " + num);
    
    if (this.arr.length == 0) {
        this.arr.push(num);
        return;
    }
    
    // find insertion index
    let idx = this.arr.findIndex(curr => curr > num);
    if (idx === -1){
        idx = this.arr.length;
    }
    // console.log("insert num = " + num, "at index = " + idx);
    this.arr.splice(idx, 0, num);
    // console.log(this.arr);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // if odd
    if(this.arr.length & 1 == 1){
        const idx = Math.floor(this.arr.length / 2);
        return this.arr[idx];
    }
    // if even
    const idx1 = Math.floor( (this.arr.length-1) / 2); //eg length = 4, idx1 = 3/2 = 1
    const idx2 = idx1 + 1;
    return this.arr[idx1] /2 + this.arr[idx2]/2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */