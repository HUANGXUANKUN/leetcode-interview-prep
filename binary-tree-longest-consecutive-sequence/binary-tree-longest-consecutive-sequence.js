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
 * @return {number}
 */
var longestConsecutive = function(root) {
    function dfs(node, parent, len){
        if (node == null) return 0;
        // check if parent
        if (parent && node.val == parent.val + 1){
            len += 1;
        }else{
            len = 1;
        }
        maxLen = Math.max(maxLen, len);
        // left and right
        dfs(node.left, node, len);
        dfs(node.right, node, len);
    }
    const dp = new Map();
    let maxLen = 0;
    dfs(root, null, 0);
    return maxLen;
    
    
};