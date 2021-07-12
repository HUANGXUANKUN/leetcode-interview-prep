/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegreeCount = Array(numCourses).fill(0);
    const adjMap = new Map();
    for (let i = 0; i < numCourses; i++){
        adjMap.set(i, []);
    }
    for(let [to, from] of prerequisites){
        inDegreeCount[to] += 1;
        adjMap.get(from).push(to);
    }
    console.log(inDegreeCount)
    console.log(adjMap)
    
    // find the node with zero inDegree
    let queue = [];
    const topoResult = [];
    
    for (let i = 0; i < numCourses; i++){
        if(inDegreeCount[i] == 0){
            queue.push(i);
        }
    }
    
    while (queue.length > 0){
        const newQueue = [];
        for (curr of queue){
            topoResult.push(curr);
            // find all children
            // deduct inDegree
            for(target of adjMap.get(curr)){
                inDegreeCount[target] -= 1;
                if (inDegreeCount[target] == 0){
                    newQueue.push(target) // no incoming node, add to queue
                }
            }
        }
        queue = newQueue;
    }
    
    if (topoResult.length == numCourses){
        // all visited
        return topoResult;
    }
    return []; // some not visited
};