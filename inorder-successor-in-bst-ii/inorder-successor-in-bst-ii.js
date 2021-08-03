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
    // if node.right exists, look for left most child in the right branch
    if (node.right){
        let child = node.right;
        // find the left most
        while(child.left){
            child = child.left;
        }
        return child;
    }
  // else, look for the first parent on its right
    let parent = node.parent;
    // check all the parents, return the first parent on the right
    while (parent){
        if (parent.left == node){
            return parent;
        }
        node = parent;
        parent = parent.parent;
    }
    return parent;  
};