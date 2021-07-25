/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // shallow copy list, store key, value pair as [oldNode, newNode]
    const nodeMap = new Map();
    let dummyHead = new Node(0);
    let resultNode = dummyHead;
    let currNode = head;
    while(currNode){
        // create new node
        const newNode = new Node(currNode.val, null, currNode.random);
        // save to map
        nodeMap.set(currNode, newNode);
        resultNode.next = newNode;
        resultNode = resultNode.next;
        currNode = currNode.next;
    }
    // iterate list and reassign all random pointed node
    let newNode = dummyHead.next;
    while(newNode){
        // reassign random pointed node
        const randomOldNode = newNode.random;
        if(randomOldNode){
            newNode.random = nodeMap.get(randomOldNode); // reassign
        }
        newNode = newNode.next;
    }
    return dummyHead.next;
    
};