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
    const nodeMap = new Map();
    const shallowCopy = (node) => {
        if (node == null) return null;
        const copyNode = new Node(node.val, null, node.random);
        copyNode.next = shallowCopy(node.next);
        nodeMap.set(node, copyNode);
        return copyNode;
    }
    // first create shallow copy with n new nodes
    const copyHead = shallowCopy(head);
    // then all random pointers in one node points to new nodes
    let currCopyNode = copyHead;
    while(currCopyNode){
        if (currCopyNode.random != null){
            currCopyNode.random = nodeMap.get(currCopyNode.random);      
        }
        currCopyNode = currCopyNode.next;
    }
    return copyHead;
};