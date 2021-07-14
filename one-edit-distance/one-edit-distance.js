/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    // s is shorter than t
    if (s.length > t.length){
        return isOneEditDistance(t,s);
    }
    // base case
    if (s.length == 0 && t.length == 0){
        return false;
    }
    if (s == t || t.length - s.length > 1){
        return false;
    }
    
    // find the first index differences, and skip that index to compare the remaining

    for (let i = 0; i < s.length; i++){
        if (s[i] == t[i]) continue;
        // not equal
        if(s.length == t.length){
            //compare remaining
            if (s.slice(i+1) == t.slice(i+1)) return true;
            return false;
            
        }else{ // s.length != t.length
            // compare s[i...n] with t[i+1...m]
            if (s.slice(i) == t.slice(i+1)) return true;
            return false;
        }
    }
    // equal for s[1...n] and t[1...n]
    // check if both equal
    return true;
    
    
};