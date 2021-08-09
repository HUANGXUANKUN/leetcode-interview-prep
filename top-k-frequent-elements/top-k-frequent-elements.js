/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // use O(N) quick select
    const partition = (nums, selectedPivot, left, right, ) => {
        // swap new pivot to last
        const value = nums[selectedPivot][0];
        [nums[selectedPivot], nums[right]] = [nums[right], nums[selectedPivot]];
        let swapIndex = left;
        for (let i = left; i < right; i++){
            // put to left
            if (nums[i][0] > value){
                [nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]];
                swapIndex++;
            }
        };
        // swap back 
        [nums[swapIndex], nums[right]] = [nums[right], nums[swapIndex]];
        return swapIndex;
    }
    const quickSelect = (nums, k, left, right) => {
        // get a random pivot
        const randomPivot = left + Math.floor(Math.random() * (right -left + 1));
        const newPivot = partition(nums, randomPivot, left, right);
        if (newPivot == k-1){
            return nums[k-1];
        }
        else if (newPivot < k-1){
            return quickSelect(nums, k, newPivot+1, right);
        }else{
            return quickSelect(nums, k, left, newPivot-1);
        }
    }
    // store all fre
    const map = new Map();
    for(const curr of nums){
        map.set(curr, (map.get(curr) || 0) + 1);
    }
    const frequency = [];
    for (let [number, count] of map.entries()){
        frequency.push([count, number]);
    }
    console.log(frequency);
    quickSelect(frequency, k, 0, frequency.length-1);
    console.log(frequency);
    const result = [];
    for(let i = 0; i < k; i++){
        result.push(frequency[i][1]);
    }
    return result;
};