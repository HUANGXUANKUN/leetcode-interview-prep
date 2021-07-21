/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // find frequency
    const map = new Map();
    for (const num of nums){
        map.set(num, (map.get(num) | 0) + 1);
    }
    
    // Method 1: O(klogk), use heap
    
    // Method 2: O(N) - O(N^2), randomized quick select
    
    // Method 3: counter sort // since answer is unique
    const n = nums.length;
    const counter = Array(n+1).fill(0).map(()=>[]);
    // console.log(map)
    for (let [num, count] of map.entries()){
        counter[count].push(num);
    }
    // console.log(counter)
    // counter = {frequency: [num]}
    let result = [];
    for (let i = n; i >= 0 && k > 0; i--){
        for (let j = 0; j < counter[i].length; j++){
            result.push(counter[i][j]);
            k--;
            if(k<=0) break; 
        }
    }
    return result;
    
};