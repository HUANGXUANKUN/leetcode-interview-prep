/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // base case
    if (chars.length <= 1){
        return chars.length;
    }
    let placePivot = 0;
    let count = 0;
    for (let i = 0; i < chars.length; i++){
        const curr = chars[i];
        const next = chars[i+1]; // at i == chars.length - 1, it is undefined
        // if equal to prev
        count++;
        // if not equal to next, or last element
        if(curr != next || i == chars.length-1){
            // console.log("curr = " + curr)
            // console.log("count = " + count)
            // place prev
            chars[placePivot] = curr;
            placePivot++; // next position
            if (count == 1){
                count = 0; // new count
                continue;
            }
            const countStr = count.toString();
            for (const str of countStr){
                chars[placePivot] = str;
                placePivot++; 
            }
            count = 0;    
        }
    }
    // include last
    return placePivot;
};