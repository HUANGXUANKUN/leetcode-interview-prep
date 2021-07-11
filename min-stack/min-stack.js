/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // console.log(this.stack)
    this.stack.push(val);
    if (this.minStack.length == 0){
        this.minStack.push(val);
    }else if (val <= this.minStack[this.minStack.length -1]){
        this.minStack.push(val);
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popValue = this.stack.pop();
    if (popValue == this.minStack[this.minStack.length-1]){
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length > 0){
        return this.stack[this.stack.length-1]
    }else{
        return null;
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minStack.length > 0){
        return this.minStack[this.minStack.length-1]
    }else{
        return null;
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */