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
var preorderTraversal = function(root) {
    if (root == null) return [];
    const result = [];
    const stack = [root];
    while(stack.length > 0 ){
        const node = stack.pop();
        result.push(node.val);
        // right first
        if (node.right != null){
            stack.push(node.right);
        }
        if(node.left != null){
            stack.push(node.left);
        }
        
    }
    return result;
};