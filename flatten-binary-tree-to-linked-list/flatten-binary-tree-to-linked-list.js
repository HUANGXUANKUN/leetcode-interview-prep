/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root == null) return false;
    const dummyHead = new TreeNode(0);
    let curr = dummyHead;
    let stack = [root];
    while (stack.length > 0){
        // curr
        const node = stack.pop();
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
        
        // disconnect
        node.left = null;
        // node.right = null; 
        
        // attached to curr
        curr.right = node;
        curr = curr.right;
    }
    return dummyHead.right;
};