/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    // check the number of odd count character
    const map = new Map();
    let odd = 0;
    
    for (const char of s){
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (const count of map.values()){
        if (count & 1 == 1){
            odd += 1;
        }
    }
    if (odd > 1) return false;
    return true;
    
    // if odd count <= 1, then true
    // else false
    
};