/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // O(N)
    
    // Height of the tank is determined by the lowest wall (left or right)
    
    // we should increment or decrement the pointers which is lower 
    let left = 0;
    let right = height.length - 1;
    let maxSize = 0;
    while(left < right){
        // console.log([left, right]);
        // look for the lower pointer and update it
        const heightLeft = height[left],
              heightRight = height[right];
        // console.log("height: " + [heightLeft, heightRight]);
        
        const width = right - left; // this is the width of the tank
        const size = width * Math.min(heightLeft, heightRight);
        // console.log("size = " + size);
        maxSize = Math.max(maxSize, size); // update the size
        if (heightLeft <= heightRight ){
            left ++;
        }else{
            right --;
        }
    }
    return maxSize;
};