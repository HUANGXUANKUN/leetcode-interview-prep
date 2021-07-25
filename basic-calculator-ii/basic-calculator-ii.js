/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // replace all ''
    s = s.replaceAll(' ','');
    const n = s.length;
    let prevSign = '+';
    let ans = 0;
    let prevNum = 0;
    let currNum = 0;
    
    for (let i = 0; i < n; i++){
        const char = s[i];
        if (i == n-1 || char == '+' || char == '-' || char == '*' || char == '/'){

            // if this is last
            if (i == n-1){
                currNum = currNum * 10 + parseInt(char);

            }
            if (prevSign == '+'){
                ans += prevNum;
                prevNum = currNum;
            }else if (prevSign == '-'){
                ans += prevNum;
                prevNum = -currNum;
            }else if (prevSign == '*'){
                prevNum = prevNum * currNum;
            }else if (prevSign == '/'){
                prevNum = parseInt(prevNum / currNum);
            }
            currNum = 0;
            prevSign = char;
            
        }else{
            // is number
            currNum = currNum * 10 + parseInt(char);
            // console.log("new currNum = " + currNum)
        }
        // console.log("new sum = " + ans)
    }
    // console.log("adding last currNum = " + currNum)
    ans += prevNum;
    return ans;
};