/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.nums = [];
    this.map = new Map(); // value: index  
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.map.has(val)){
        this.nums.push(val);
        this.map.set(val, this.nums.length-1);
        return true;
    }
    return false;    
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false; // does not contain val
    const index = this.map.get(val);
    // swap nums[indedx] with nums[last]
    this.nums[index] = this.nums[this.nums.length-1];
    this.map.set(this.nums[index], index);
    this.nums.pop();
    this.map.delete(val);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    // get a random element from array
    const n = this.nums.length;
    const randomIndex = Math.floor(Math.random()*n);
    return this.nums[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */