/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // maxHeight from left
    let leftMax = 0;
    const maxFromLeft = Array(height.length).fill(0)
    for(let i = 0; i < height.length; i++){
        const currHeight = height[i]
        leftMax = Math.max(leftMax, currHeight)
        maxFromLeft[i] = leftMax;
    }
    
    // maxHeight from right
    let rightMax = 0;
    const maxFromRight = Array(height.length).fill(0)
    for(let i = height.length-1; i >= 0; i--){
        const currHeight = height[i]
        rightMax = Math.max(rightMax, currHeight)
        maxFromRight[i] = rightMax;
    }
    
    // iterate maxFromRight and maxFromLeft and find the min
    let waterCount = 0;
    for (let i = 0; i < height.length;i++){
        waterCount += (Math.min(maxFromLeft[i], maxFromRight[i]) - height[i])
    }
    return waterCount;
};