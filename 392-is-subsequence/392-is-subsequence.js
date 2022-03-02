/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p1 = 0, p2 =0;
    while (p1 < s.length && p2 < t.length){
        // check p1 === p2, if yes, proceed both, else proceed p2
        if (s[p1] === t[p2]){

            p1++;
            p2++;
        }
        else{
            p2++;
        }   
        // end condition: if p1 reach the end
    }

    return p1 === s.length ? true : false;
};