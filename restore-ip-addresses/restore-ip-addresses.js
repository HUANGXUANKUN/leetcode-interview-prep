/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const recur = (s, startIndex, currList, result) => {
        // console.log('startIndex = ' + startIndex, currList)
        if (startIndex == s.length){
            if (currList.length == 4) {
                // console.log('matched!')
                result.push(currList.join('.'));
            }
            return;
        }
        // startIndex < s.len
        if (currList.length >= 4) return; // exceed
        
        let currNum = 0;
        for (let i = startIndex; i < s.length; i++){
            const digit = s[i];
            currNum = currNum * 10 + parseInt(digit);
            if (currNum > 255) return;
            currList.push(currNum.toString());
            recur(s, i+1, currList, result);
            currList.pop();
            if (currNum == 0){
                // no leading zero
                return;
            }
        } 
    }
    const result = [];
    recur(s, 0, [],result);
    return result;
};