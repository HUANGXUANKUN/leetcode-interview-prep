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
    // find the max left & right height from currNode to the end, and compare
    const dfs = (root) => {
        if (root == null){
            return [0, true];
        }
        const leftResult = dfs(root.left)
        const rightResult = dfs(root.right)
        if (!leftResult[1] || !rightResult[1]){
            // if sub tree unbalance
            return [0, false];
        }
        if (Math.abs(leftResult[0] - rightResult[0]) > 1){
            // left right branch unblanced
            return [0,false];
        }
        // balance, return [maxHeight, true]
        return [1 + Math.max(leftResult[0], rightResult[0]), true];
    }
    return dfs(root)[1];
    
};