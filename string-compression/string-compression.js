/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // eg: [a a a b b c c c d]
    // out:[a, 3, b, 2, c, 3, d]
    // In Place!!! 
    // index to record the cursor position
    let index = 0;
    let count = 1;
    for (let i = 0; i < chars.length; i++){
        const curr = chars[i];
        // if curr is the last char || curr != chars[i+1]
        if (i == chars.length - 1 || curr != chars[i+1]){
            chars[index] = curr; // replace with char
            index += 1;
            // if count > 1, replace with count
            if (count > 1){
                // count the length of the count
                const countStr = count.toString();
                const countLen = countStr.length;
                for (let j = 0; j < countLen; j++){     
                    chars[index] = countStr[j];
                    index+=1;
                }
            }
            count = 1;
        }else{
            // curr == chars[i+1]
            count += 1;
        }
    }
    // output the length of the array
    return index;
};