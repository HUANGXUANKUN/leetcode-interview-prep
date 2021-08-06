/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // step 1: tokenize s into words
    const tokens = s.split(' ');
    // step 2: reverse each word
    for (let i = 0; i < tokens.length; i++){
        const characters = tokens[i].split('');
        characters.reverse();
        tokens[i] = characters.join('');
    }
    // step 3: join the reversed word back to a new sentence
    return tokens.join(' ');
    
};