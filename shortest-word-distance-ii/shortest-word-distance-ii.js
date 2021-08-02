/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    const distMap = new Map();
    for (let i = 0; i < wordsDict.length; i++){
        const word = wordsDict[i];
        if (!distMap.has(word)){
            distMap.set(word, []); 
        }
        distMap.get(word).push(i); 
    }
    this.distMap = distMap;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    // race 
    let arr1 = this.distMap.get(word1);
    let arr2 = this.distMap.get(word2);
    let i = 0, j = 0;
    let result = Number.POSITIVE_INFINITY;
    while (i < arr1.length && j < arr2.length){
        result = Math.min(result, Math.abs(arr1[i] - arr2[j]));
        // increment i or j, whichever slower
        if (arr1[i] < arr2[j]){
            i++;
        }else{
            j++;
        }
    }
    return result;
    
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */