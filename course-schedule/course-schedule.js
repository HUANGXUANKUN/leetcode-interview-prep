/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    // topologic
    const graph = new Map(); // a to [b,c,d,e]
    const inDegree = new Map(); // a from [b, c, d, e]
    // init
    for (let i = 0; i < numCourses; i++){
        graph.set(i, new Set())
        inDegree.set(i, new Set())      
    }
    for (let [to, from] of prerequisites){
        graph.get(from).add(to);
        inDegree.get(to).add(from);  
    }
    console.log(graph)
    console.log(inDegree)
    // find zero indegree
    let queue = [];
    for (let [key, value] of inDegree.entries()){
        if (value.size == 0){
            queue.push(key);
        }
    }
    console.log(queue)
    const topoResult = [];
    while (queue.length > 0){
        const newQueue = []
        for (const from of queue){
            topoResult.push(from);
            console.log("from = " + from)
            // find  children
            const toSet = graph.get(from);
            // iterate childrens
            for (const target of toSet){
                console.log("target = " + target);
                // remove indegree
                inDegree.get(target).delete(from);
                if (inDegree.get(target).size == 0){
                    newQueue.push(target);
                }
                toSet.delete(target);
            }
        }
            
        queue = newQueue;
    }
    console.log(topoResult);
    return topoResult.length == numCourses
};