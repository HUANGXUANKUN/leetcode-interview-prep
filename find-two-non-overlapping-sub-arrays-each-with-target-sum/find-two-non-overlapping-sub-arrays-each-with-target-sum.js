/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const getMinLenArray = (arr, target) => {
        const n = arr.length;
        let left = 0;
        const minLengthFromLeft = Array(n).fill(Number.POSITIVE_INFINITY);
        let minLen = Number.POSITIVE_INFINITY;
        let windowSum = 0;
        for (let right = 0; right < n; right++){
            windowSum += arr[right];
            // check if need shrink
            while (left <= right && windowSum > target){
                windowSum -= arr[left];
                left++;
            }
            if (windowSum == target){
                minLen = Math.min(minLen, right-left+1);
            }
            minLengthFromLeft[right] = minLen;
        }
        return minLengthFromLeft;
    }
    
    // base case
    if (arr.length == 1){
        return -1;
    }
    // use sliding window from left
    const minArrFromLeft = getMinLenArray(arr, target);
    // use sliding window from right
    const reverseArr = arr.slice(0).reverse();
    const minArrFromRight = getMinLenArray(reverseArr, target).reverse();
    console.log(minArrFromLeft);
    console.log(minArrFromRight);

    // length is atleast 2
    let result = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arr.length-1; i++){
        // check if valid for [0...i] and [i+1...n-1]
        if (minArrFromLeft[i] != Number.POSITIVE_INFINITY &&
            minArrFromRight[i+1] != Number.POSITIVE_INFINITY){
            result = Math.min(result, minArrFromLeft[i]+minArrFromRight[i+1]);
        }
    }
    if (result == Number.POSITIVE_INFINITY) return -1;
    return result;
};