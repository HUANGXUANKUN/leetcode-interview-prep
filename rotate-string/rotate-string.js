/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length != goal.length) return false;
    // join s and goal
    const newS = s + s;
    // check if newS contains goal
    if (newS.indexOf(goal) != -1){
        return true;
    }
    return false;
};