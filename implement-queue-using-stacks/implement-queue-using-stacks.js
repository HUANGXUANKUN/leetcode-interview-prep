/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stackA = [];
    this.stackB = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackA.push(x);
    
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.empty()) return;
    if (this.stackB.length == 0){
        // push all stackA to stackB
        while(this.stackA.length > 0){
            this.stackB.push(this.stackA.pop());
        }
    }
    return this.stackB.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.empty()) return;
    if(this.stackB.length > 0){
        return this.stackB[this.stackB.length-1];
    }
    // B is empty, top is stackA.first
    return this.stackA[0];

};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.stackA.length == 0 && this.stackB.length == 0) return true;
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */