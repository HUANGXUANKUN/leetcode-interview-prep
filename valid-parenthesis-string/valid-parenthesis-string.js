/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    if (s.length == 0) return true;
    let leftCountMin = 0;
    let leftCountMax = 0;
    
    // (*))
    for (let char of s){
        if (char == '('){ // [1, 1]
            leftCountMin += 1;
            leftCountMax += 1;
        }else if(char == ')'){ // []
            if (leftCountMax == 0){
                // cannot add )
                return false;
            }
            leftCountMax -= 1;
            leftCountMin -= 1;
            leftCountMin = Math.max(0, leftCountMin);
        }else{
            // *
            leftCountMin = Math.max(0, leftCountMin-1);
            leftCountMax += 1;
        }
    }
    if (leftCountMin == 0)return true;
    return false;
};