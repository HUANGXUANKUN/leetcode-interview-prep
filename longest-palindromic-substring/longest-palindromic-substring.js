/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // parlindrome1: a|ab|b
    // palindrome2: aba
    const expandFromTwoPointers = (s, left, right)=>{
        const n = s.length;
        if (s[left] != s[right]) return [left, left];  //eg aabcaa
        // try expanding
        while(true){
            // check the next left and next right
            if (left - 1 < 0 || right + 1 >= n || s[left-1] != s[right+1]){
                return [left, right];
            }
            left -= 1;
            right += 1;
        }
    }
    let maxLen = 0;
    let resultLeft = 0, resultRight = 0;
    for (let i = 0; i < s.length; i++){
        // expand from the curr char
        const arr1 = expandFromTwoPointers(s, i, i); //eg aba
        
        const arr2 = i == s.length - 1 ? [i, i] : expandFromTwoPointers(s, i, i+1);
        // console.log([arr1, arr2])
        const len1 = arr1[1] - arr1[0] + 1;
        const len2 = arr2[1] - arr2[0] + 1;
        if (len1 > maxLen){
            resultLeft = arr1[0], resultRight = arr1[1];
            maxLen = len1;
        }
        if (len2 > maxLen){
            resultLeft = arr2[0], resultRight = arr2[1];
            maxLen = len2;
        }
    }
    console.log(resultLeft, resultRight);
    return s.slice(resultLeft, resultRight+1);
};