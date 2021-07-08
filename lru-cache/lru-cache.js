/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // use map insert order to track LRU
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // console.log("getting " + key)
    
    if (this.map.has(key)){
        const value = this.map.get(key);
        //reinsert
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }
    return -1;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // console.log("putting " + key + ' ' + value)
    if (this.map.has(key)){
        //reinsert
        this.map.delete(key);
        this.map.set(key, value);
    }else{
        this.map.set(key, value);
    }
    // check if exceeds the capacity
    if (this.map.size > this.capacity){
        const popKey = this.map.keys().next().value;        
        this.map.delete(popKey);
        // console.log("popping " + popKey)
        return popKey;
    }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */