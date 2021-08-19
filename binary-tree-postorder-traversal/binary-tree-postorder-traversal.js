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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root == null) return [];
    const stack = [];
    const output = [];
    stack.push(root);
    while (stack.length > 0){
        const curr = stack.pop();
        output.push(curr.val);
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    output.reverse();
    return output;
};