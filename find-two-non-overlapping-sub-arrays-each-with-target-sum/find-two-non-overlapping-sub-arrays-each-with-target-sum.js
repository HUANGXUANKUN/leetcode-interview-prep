/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    // minLen sub array from the left
    const n = arr.length;
    const minLenFromLeft = Array(n).fill(Number.POSITIVE_INFINITY);
    let minLen = Number.POSITIVE_INFINITY;
    let left = 0;
    let currSum = 0;
    for (let right = 0; right < n; right++){
        currSum += arr[right];
        // if shrink
        while (left < right && currSum > target){
            // popleftmost
            const leftNum = arr[left];
            left++;
            currSum -= leftNum;
        }
        // console.log("at right = " + right + " currSum = " + currSum);
        
        if (currSum == target){
            // record len
            // console.log("Found ! at left = " + left + " right = " + right)
            const len = right-left+1;
            minLen = Math.min(len, minLen);
        }
        minLenFromLeft[right] = minLen;
        
    }
    // console.log(minLenFromLeft);
    // minLen sub array from the right
    const minLenFromRight = Array(n).fill(Number.POSITIVE_INFINITY);
    minLen = Number.POSITIVE_INFINITY;
    currSum = 0;
    let right = n-1;
    
    for (let left = n-1; left >= 0 ; left--){
        currSum += arr[left];
        // if shrink
        while (left < right && currSum > target){
            // popRightMost
            const rightNum = arr[right];
            right--;
            currSum -= rightNum;
        }
        
        if (currSum == target){
            // record len
            // console.log("Found ! at left = " + left + " right = " + right)
            const len = right-left+1;
            minLen = Math.min(len, minLen);
        }
        minLenFromRight[left] = minLen;
    }
    // console.log(minLenFromRight)
    // find the minLen from [1, pivot] to [pivot+1, n]
    let minLenOfTwo = Number.POSITIVE_INFINITY; 
    for(let i = 0; i < n-1; i++){
        const leftMin = minLenFromLeft[i];
        const rightMin = minLenFromRight[i+1];
        if (leftMin != Number.POSITIVE_INFINITY && rightMin != Number.POSITIVE_INFINITY){
            // has result
            minLenOfTwo = Math.min(minLenOfTwo, leftMin+rightMin);
        }
    }
    if (minLenOfTwo == Number.POSITIVE_INFINITY){
        // not found
        return -1;
    }
    return minLenOfTwo;
    
};