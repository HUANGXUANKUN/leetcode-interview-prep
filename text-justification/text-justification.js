/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const lines = [];
    const n = words.length;
    let i = 0; 
    let lineIndex = 0;
    const lineLen = [];
    const result = [];
    while (i < n){
        // new line
        const currLine = [];
        let wordLen = 0;
        while (i < n && wordLen + words[i].length <= maxWidth){
            currLine.push(words[i]);
            wordLen += (words[i].length + 1); // word + 1 space
            i++;
        }       
        lines.push(currLine);
        lineLen.push(wordLen - (currLine.length));
    }
    console.log(lines)
    // calculate number of spaces 
    for (let i = 0; i < lines.length - 1; i++){
        const line = lines[i];
        // console.log(line);
        const currLineLen = lineLen[i]; 
        const wordCount = line.length;
        
        const totalSpaceCount = maxWidth - currLineLen;
        let numOfSpaces = Math.max(1, wordCount-1);
        const minSpaceCount = Math.floor(totalSpaceCount / numOfSpaces);
        let remainingSpaceCount = totalSpaceCount - minSpaceCount * numOfSpaces;
        // console.log("currLineLen | totalSpaceCOunt | numOfSpace | minSPaceCOunt | remainingSpaces")
        // console.log([currLineLen, totalSpaceCount, numOfSpaces, minSpaceCount, remainingSpaceCount]);
              
        const spaceCount = Array(numOfSpaces).fill(0);
        const newLine = [];
        for (let j = 0; j < wordCount; j++){
            newLine.push(line[j]);
            // console.log("pushing " + line[j])
            // push minSpaces
            if (numOfSpaces > 0){
                numOfSpaces--;
                for (let k = 0; k < minSpaceCount; k++){
                    newLine.push(' ');
                }
            }
            // push addition spaces
            if (remainingSpaceCount > 0){
                remainingSpaceCount--;
                newLine.push(' ');
            } 
        }
        const lineStr = newLine.join('');
        // console.log(lineStr);
        result.push(lineStr);
    }
    // add last line
    const lastLine = lines[lines.length-1];
    // add remaining space
    const spaces = maxWidth - lineLen[lineLen.length-1] - (lastLine.length - 1);
    const lineStr = lastLine.join(' ');
    const spaceToken = [];
    for (let i = 0; i < spaces; i++){
        spaceToken.push(' ');
    }
    result.push(lineStr + spaceToken.join(''));
    return result;
};