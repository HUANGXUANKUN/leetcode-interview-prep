/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.shuffled = nums;
    this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.shuffled = [...this.original];
    return this.shuffled;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // shuffled shuffled
    for (let i = 0; i < this.shuffled.length; i++){
        // find random index from [i to n]
        const randomIndex = i + Math.floor(Math.random() * (this.shuffled.length - i));
        // swap
        [this.shuffled[i], this.shuffled[randomIndex]] = [this.shuffled[randomIndex], this.shuffled[i]];
                            
    }
    return this.shuffled;
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */