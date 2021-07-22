/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = [];
    
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // use insertion sort
    // find the insertion point
    if (this.arr.length == 0) {
        this.arr.push(num);
        return;
    }
    
    let i = this.arr.length;
    while (i >= 1 && this.arr[i-1] > num){
        // console.log("this.arr[i-1] = " + this.arr[i-1])
        i--; 
    }
    // console.log("insert at i = " + i)
    this.arr.splice(i, 0, num); // insert at i, replace 0 element
    // console.log("after adding num = " + num);
    // console.log(this.arr);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.arr.length & 1 == 1) {
        // is odd
        return this.arr[Math.floor(this.arr.length/2)];
    }else{
        // even
        const index = this.arr.length/2;
        return this.arr[index-1] * 0.5 + this.arr[index] * 0.5;
    }
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */