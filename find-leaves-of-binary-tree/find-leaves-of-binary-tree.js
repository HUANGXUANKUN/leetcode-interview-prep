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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    // dfs to return height
    const dfs = (node) => {
        // add by height
        if (node == null) return -1;
        const height = 1 + Math.max(dfs(node.left), dfs(node.right));
        if (height > output.length-1){
            output.push([]);
        }
        output[height].push(node.val);
        return height;
    }
    if (root == null){
        return [];
    }
    const output = [];
    dfs(root);
    console.log(output);
    return output;
    
};