/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const n = nums1.length,
        m = nums2.length;
    if (n+m == 0) return 0;
    let median = (nums1.length + nums2.length) >> 1; // median or median to the right

    let a = 0, b = 0;
    let prev, curr;
    
    for (let i = 0; i <= median; i++){
        prev = curr;
        
        if (a >= n){
            curr = nums2[b];
            b++;
        }
        else if (b >= m){
            curr = nums1[a];
            a++;
        }else{
            // compare
            if (nums1[a] < nums2[b]){
                curr = nums1[a];
                a++; 
            }else{
                curr = nums2[b];
                b++; 
            }
        }
    }
    
    // if odd
    if ((n+m) & 1 == 1){
        return curr;
    }
    // even
    return (curr + prev)/2;
    
};