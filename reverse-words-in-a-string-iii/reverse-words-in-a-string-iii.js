/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const tokens = s.split(' ');
    // revert each tokens
    for(let i = 0; i < tokens.length; i++){
        const chars = tokens[i].split('');
        chars.reverse();
        tokens[i] = chars.join('');
    }
    return tokens.join(' ')
    
};