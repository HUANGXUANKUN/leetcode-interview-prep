/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    // dp[StoneIndex][k] to memorise state
    // -1: notvisited 
    // 0: visited but failed 
    // 1: visited and success
    // jump to k-1, k and k+1 if possible
    
    const jump = (stones, index, k, dp) => {
        // console.log("at pos = ", stones[index], " k = ", k)
        if (index == stones.length -1){
            return true; // reach last
        }
        if (dp[index][k] != -1){
            // visited and failed
            return false;
        }
        // mark visited
        
        // try k-1, k, k+1
        let i = k-1;
        if (i == 0) i = k;
        // console.log([i, k+1])
        for (; i <= k+1; i++){
            // check if can jump to next stone
            const currPos = stones[index];
            if (posMap.has(currPos + i)){
                // can jump to next
                if (jump(stones, posMap.get(currPos+i), i, dp)){
                    dp[index][k] = 1;
                    return true;
                }
            }
        }
        dp[index][k] = 0;
        return false;
    }
    const n = stones.length;
    const dp = Array(n).fill(0).map(()=>Array(n).fill(-1));
    const posMap = new Map();
    for (let i = 0; i < stones.length; i++){
        posMap.set(stones[i], i);
    }
    // jump to next stone first
    // check if can go to next
    if (stones[1] != 1){
        return false
    }
    const result = jump(stones, 1, 1, dp);
    // console.log(dp)
    return result;
};