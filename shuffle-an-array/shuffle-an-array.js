/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.originalNums = [...nums];
    this.shuffledNums = [...nums];
    
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.shuffledNums = [...this.originalNums];
    return this.shuffledNums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    this.reset();
    // shuffle
    for (let i = 0; i < this.shuffledNums.length; i++){
        // get a random index from [i...n], then swap
        // eg i = 1, n = 3, randomIndex = 1 + random[0, 2)
        const randomIndex = i + Math.floor(Math.random() * this.shuffledNums.length - i);
        const temp = this.shuffledNums[i];
        this.shuffledNums[i] = this.shuffledNums[randomIndex];
        this.shuffledNums[randomIndex] = temp;
    }
    return this.shuffledNums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */