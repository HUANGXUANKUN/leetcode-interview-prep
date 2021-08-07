/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // find index of the median + 1 index
    const n = nums1.length,
          m = nums2.length;
    const endIndex = Math.min(((n + m - 1) >> 1) + 1, n+m-1);
    console.log(endIndex);
    let i = 0, j = 0;
    const merged = [];
    for (let idx = 0; idx <= endIndex; idx++){
        let valueA = Number.POSITIVE_INFINITY,
            valueB = Number.POSITIVE_INFINITY;
        if (i < n){
            valueA = nums1[i];
        }
        if (j < m){
            valueB = nums2[j];
        }
        // compare value
        // console.log([valueA, valueB])
        if (valueA <= valueB){
            merged.push(valueA);
            i++;
        }else{
            merged.push(valueB);
            j++;
        }
        if (merged.length > 2){
            merged.shift(); // pop first
        }
    }
    // console.log(merged)
    // test if odd or even
    if ((n + m) & 1 == 1){
        // odd
        return merged[0];
    }else{
        return (merged[0] + merged[1]) / 2;
    }
    
};