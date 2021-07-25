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
    const dfs = (node) => {
        if (node == null) return node;
        // if has left and right, move right-branch to the right most sub-branch of left branch
        // then move left-branch to right-branch, then next
        if (node.left && node.right){
            let rightMostInLeft = node.left;
            while(rightMostInLeft.right != null){
                rightMostInLeft = rightMostInLeft.right;
            }
            rightMostInLeft.right = node.right;
            node.right = node.left;
            node.left = null;
        }
        // if only left, then move left to right
        else if (node.left){
            node.right = node.left;
            node.left = null;
        }
        // only node.right
        // visit node.right
        dfs(node.right);
    }
    dfs(root);
    return root;
    
};