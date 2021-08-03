/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // adjMap
    // inDegreeCount
    const adjMap = Array(numCourses).fill(0).map(()=>[]);
    const inDegreeCount = Array(numCourses).fill(0);
    
    // (a, b)
    for(const [to, from] of prerequisites){
        // update adjMap
        adjMap[from].push(to);
        // update indegree Count
        inDegreeCount[to]+=1;
    }
    
    // look for entry points with zero indeg count
    let queue = [];
    let visited = []; 
    for (let i = 0; i < numCourses; i++){
        if(inDegreeCount[i] == 0){
            queue.push(i);
        }
    }
    // perform bfs (breath-first-search)
    while(queue.length > 0){
        const newQueue = [];
        for (const node of queue){
            // add to visited
            visited.push(node);
            // reduce all the indegcount of its children by 1
            for (const child of adjMap[node]){
                inDegreeCount[child] -= 1;
                // if inDegCount == 0, means we can visit it in the next level
                if (inDegreeCount[child] == 0){
                    newQueue.push(child);
                }
            }
        }
        queue = newQueue;
    }
    
    // if all courses are attend
    if (visited.length == numCourses) return true;
    
    // some are not attended 
    return false;

};