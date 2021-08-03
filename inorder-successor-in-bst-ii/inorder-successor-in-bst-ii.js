/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function(node) {
    // if there is a right child, look for the left most child in the right branch
    if (node.right){
        let child = node.right;
        while(child.left){
            child = child.left;
        }
        return child; // child is the left most child in the right branch
    }
    // else, look for the first parent on the right
    let parent = node.parent;
    while(parent){
        // check if the parent is on the right
        if(parent.left == node){
            return parent;
        }
        node = parent;
        parent = parent.parent;
    }
    // there is no parent on the right
    return null;
    
    
};