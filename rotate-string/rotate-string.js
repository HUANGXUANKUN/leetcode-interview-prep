/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // check length
    const n = s.length,
          m = goal.length;
    if (n != m) return false;
    // compare s+s with goal
    const s_s = s+s;
    if (s_s.indexOf(goal) != -1){
        return true;
    }
    return false;
    
    
};