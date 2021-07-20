/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // two pointers
    let left = 0, right = height.length-1;
    let maxSize = 0;
    while (left < right){
        // find the lowest one
        const len = right-left;
        const minHeight = Math.min(height[left], height[right]);
        
        maxSize = Math.max(maxSize, len * minHeight);
        // console.log("left = " + left + " right = " + right)
        // console.log("len = " + len)
        // console.log("minHeight = " + minHeight)
        // console.log(maxSize);
        if (height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxSize;
    
};