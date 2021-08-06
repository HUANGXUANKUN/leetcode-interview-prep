/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    const resultLines = [];
    const lineWordLengths = [];
    let line = [];
    let lineIndex = 0;
    let wordSumLen = 0;
    resultLines.push(line);
    for (let i = 0; i < words.length; i++){
        const word = words[i];
        // check if can put curr word in line, or it is not last 
        // space  |  word Lenth
        if ((line.length + wordSumLen + word.length) <= maxWidth){
            // console.log("push to curr line word = " + word );
            line.push(word);
            wordSumLen += word.length;
            lineWordLengths[lineIndex] = wordSumLen;
        }
        // else push to next line
        else{
            // console.log("push to next line: " + word);
            line = [];// new line
            lineIndex+=1;
            resultLines.push(line);
            line.push(word);
            wordSumLen = word.length;
            lineWordLengths[lineIndex] = wordSumLen;
        }
    }
    // console.log(resultLines);
    // console.log(lineWordLengths);
    // join the lines
    for (let i = 0; i < resultLines.length - 1; i++){
        const currLine = resultLines[i];
        const wordLenSum = lineWordLengths[i];
        // calculate the minSpaces and additional Space
        const spaces = maxWidth - wordLenSum;
        // if only one word, just add spaces to end
        let colSpace, additionalSpaces;
        if (currLine.length == 1){
            colSpace = 0;
            additionalSpaces = spaces;
        }else{
            // length > 1
            colSpace = Math.floor(spaces / (currLine.length-1));
            additionalSpaces = spaces % (currLine.length-1)
        }
        const lineArr = [];
        // form a line
        for (let j = 0; j < currLine.length; j++){
            const word = currLine[j];
            lineArr.push(word);
            if (j != currLine.length-1) lineArr.push(' '.repeat(colSpace));
            if (additionalSpaces != 0){
                lineArr.push(' ');
                additionalSpaces-=1;
            }
        }
        if (additionalSpaces != 0){
            lineArr.push(' '.repeat(additionalSpaces));
        }
        // console.log("line: " + currLine);
        // console.log([colSpace, additionalSpaces]);
        
        result.push(lineArr.join(''));
    }
    const lastLineWords = resultLines[resultLines.length-1];
    // console.log(lastLineWords);
    // process last line
    const lastLine = lastLineWords.join(' ');
    // // console.log(lastLine);
    // console.log(lastLine.length);
    // add spaces to the back
    const backSpaceCount = maxWidth - lastLine.length;
    result.push(lastLine + ' '.repeat(backSpaceCount));
    return result;
};