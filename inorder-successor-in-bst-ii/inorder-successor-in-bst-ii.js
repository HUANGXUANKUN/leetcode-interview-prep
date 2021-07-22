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
    if (!node) return null;
    // if node has right child, find the left most of its right child
    if (node.right){
        node = node.right;
        while(node.left){
            node = node.left;
        }   
        return node;
    }
    // if no right child, find the first parent on the right
    while(node.parent){
        const parentNode = node.parent;
        if (parentNode.left == node){
            // first right parent
            return parentNode;
        }
        node = node.parent;
    }
    return null; // no right parent 
    
};