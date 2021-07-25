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
    if (root == null) return root;
    // preorder
    const dummyHead = new TreeNode(0);
    let resultNode = dummyHead;
    const stack = [];
    stack.push(root);
    while (stack.length > 0){
        const curr = stack.pop();
        resultNode.right = curr;
        resultNode.left = null;
        resultNode = resultNode.right;
        // push right first
        if (curr.right) stack.push(curr.right); 
        // push left
        if (curr.left) stack.push(curr.left); 
    }
    return dummyHead.right;
    
};