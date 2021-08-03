/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // adj graph
    // indegree count map
    const adjMap = new Map();
    const inDegMap = new Map();
    // init
    for (let i = 0; i < numCourses; i++){
        adjMap.set(i, []);
        inDegMap.set(i, 0);
    }
    // assign values by iterating prereq
    for (const [to, from] of prerequisites){
        adjMap.get(from).push(to);
        inDegMap.set(to, inDegMap.get(to)+1);
    }
    console.log(adjMap);
    console.log(inDegMap);
    let queue = [];
    let visited = []; 
    // look for all the entry points with 0 indegree count
    for (const key of inDegMap.keys()){
        // if inDegMap[key] = 0, add as entry
        if(inDegMap.get(key) == 0){
            queue.push(key);
        }
    }
    console.log(queue);
    while(queue.length > 0){
        let newQueue = [];
        for (const node of queue){
            console.log("visiting " + node);
            // node is the current visiting point
            visited.push(node);
            // check all the children from node
            const children = adjMap.get(node);
            for(const child of children){
                inDegMap.set(child, inDegMap.get(child)-1);
                // if inDeg = 0, then add as next entry point
                if (inDegMap.get(child) == 0){
                    newQueue.push(child);
                }
            }
        }
        queue = newQueue;      
    }
    
    // compare the number of visited node with the number of courses
    if (visited.length == numCourses) return true;
    return false;

};