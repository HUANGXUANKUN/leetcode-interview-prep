/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // two pointers
    let left = 0;
    let right = height.length-1;
    let maxWater = 0;
    while (left < right){
        const contained = Math.min(height[left], height[right]) * (right - left);
        // console.log(contained)
        maxWater = Math.max(maxWater, contained);
        if (height[left] <= height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxWater;
    
};