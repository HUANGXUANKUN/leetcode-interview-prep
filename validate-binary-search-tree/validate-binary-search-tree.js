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
var isValidBST = function(root) {
    const dfs = (root, low, high) => {
        if (root == null) return true;
        // check if root value is (low, high)
        if (root.val <= low || root.val >= high) return false;
        return dfs(root.left, low, root.val) && dfs(root.right, root.val, high);
    }
    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    
};