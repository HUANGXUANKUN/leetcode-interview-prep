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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // compare the max height of leftSubtree and rightSubTree
    let balance = true;
    const dfs =(root) => {
        if (!root){
            return 0;
        }
        const leftHeight = dfs(root.left);
        const rightHeight = dfs(root.right);
        if (Math.abs(rightHeight - leftHeight) > 1){
            balance = false;
        }
        return 1 + Math.max(leftHeight, rightHeight);      
    }
    dfs(root);
    return balance;
};