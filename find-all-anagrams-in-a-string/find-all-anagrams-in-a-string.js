/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // use sliding window with size of s.length
    // use letter array to record window letter count
    const sDict = Array(26).fill(0);
    for (let char of p){
        const letterIndex = char.charCodeAt() - 'a'.charCodeAt();
        sDict[letterIndex] += 1;
    }
    const sDictString = sDict.toString();
    
    const windowDict = Array(26).fill(0);
    const result = [];
    let left = 0;
    for (let i = 0; i < s.length; i++){
        // console.log("at i = " + i)
        const curr = s[i];
        const letterIndex = curr.charCodeAt() - 'a'.charCodeAt();
        windowDict[letterIndex] += 1;
        if (i - left + 1 > p.length){
            // console.log("at i = " + i + " pop left most at " + left)
            // pop left most
            const leftMost = s[left];
            const leftMostIndex = leftMost.charCodeAt() - 'a'.charCodeAt();
            windowDict[leftMostIndex] -= 1;
            left++;
        }
        
        // compare result
        if (windowDict.toString() == sDictString){
            // console.log("matched!")
            result.push(left);
        }
    }
    return result;
    
};