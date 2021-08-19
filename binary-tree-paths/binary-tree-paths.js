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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const dfs = (root, currPath) => {
        if(root == null){
            return;
        }
        currPath.push(root.val);
        if (root.left == null && root.right == null){
            res.push(currPath.slice(0));
        }else{
            dfs(root.left, currPath);
            dfs(root.right, currPath);
        }
        currPath.pop();
    }
    const res = [];
    const output = [];
    dfs(root, []);
    for (const path of res){
        output.push(path.join('->'));
    }
    return output;
};