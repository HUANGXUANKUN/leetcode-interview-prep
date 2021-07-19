/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    // use map to maintain structure
    this.capacity = capacity;
    this.map = new Map();
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        const value = this.map.get(key);
        // delete and insert
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }else{
        return -1;
    }
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)){
        // delete and insert
        this.map.delete(key);
        this.map.set(key, value);
    }else{
        // just insert
        this.map.set(key, value);
    }
    // check size
    if (this.map.size > this.capacity){
        const firstKey = this.map.keys().next().value;
        this.map.delete(firstKey);
        return firstKey;
    }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */