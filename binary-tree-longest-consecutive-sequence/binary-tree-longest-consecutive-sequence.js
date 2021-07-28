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
    let maxLen = 0;
    const dfs = (root, end, len) => {
        if (root == null){
            return;
        }
        // check if consecturive
        if (len == 0 || (len > 0 && end + 1 == root.val)){
            len += 1;
            end = root.val;
            maxLen = Math.max(maxLen, len)
        }else{
            len = 1;
            end = root.val;
        }
        // console.log([root.val, len, end])
        dfs(root.left, end, len);
        dfs(root.right, end, len);
    }
    dfs(root, 0,0);
    return maxLen;
};