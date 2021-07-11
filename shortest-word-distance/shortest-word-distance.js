/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    // find the indexes of word1 and word2
    const word1Index = [];
    const word2Index = [];
    for(let i = 0; i < wordsDict.length; i++){
        const word = wordsDict[i];
        if (word == word1){
            word1Index.push(i)
        }else if (word == word2){
            word2Index.push(i);
        }
    }
    // console.log(word1Index)
    // console.log(word2Index)
    
    
    // iterate the index of word1 or word2 in a race condition
    // update minLength by comparing indexes, and increment the smaller index
    let i = 0, j = 0;
    let minDist = Number.POSITIVE_INFINITY;
    while (i < word1Index.length && j < word2Index.length){
        // console.log(Math.abs(word1Index[i]-word2Index[j]))
        minDist = Math.min(Math.abs(word1Index[i]-word2Index[j]), minDist);
        if (word1Index[i] < word2Index[j]){
            i++;
        }else{
            j++;
        }
    }
    return minDist;
    
    
};