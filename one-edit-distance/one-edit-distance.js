/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    // check length
    const n = s.length;
    const m = t.length;
    if (n > m) return isOneEditDistance(t, s);
    if (Math.abs(n-m) > 1){
        return false;
    }
    console.log(s)
    console.log(t)
    
    // iterate from 0 to n-1, find first difference
    for (let i = 0; i < n; i++){
        if (s[i] != t[i]){
            // different
            if(n == m){
                // compare remaining
                return s.slice(i+1) == t.slice(i+1);
            }else{
                // n < m
                return s.slice(i) == t.slice(i+1);
            }
        }
    }
    
    // s[1...n] == t[1...n]
    // if sLen != tLen, then retrue
    // if sLen == tLen, then false
    return n == m ? false : true;
};