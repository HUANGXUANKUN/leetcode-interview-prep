/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // topology
    // create adjList
    // create inDegreeCount
    const adjList = Array(numCourses).fill(0).map(()=>[]);
    const inDegreeCount = Array(numCourses).fill(0);
    for (let [to, from] of prerequisites){
        inDegreeCount[to]+=1;
        adjList[from].push(to);
    }
    // find the node with zero indegree count
    let queue = [];
    for (let i= 0; i < numCourses; i++){
        if (inDegreeCount[i] == 0){
            queue.push(i);
        }
    }
    let topoResultCount = 0;
    while (queue.length > 0){
        let newQueue = [];
        for (const from of queue){
            topoResultCount += 1;
            // check all its destination, remove the edge by reducing indegreecount
            for (const child of adjList[from]){
                inDegreeCount[child]-=1;
                if (inDegreeCount[child] == 0){
                    newQueue.push(child);
                }
            }
        }
        queue = newQueue;
    }
    return topoResultCount == numCourses ? true : false;
    
};