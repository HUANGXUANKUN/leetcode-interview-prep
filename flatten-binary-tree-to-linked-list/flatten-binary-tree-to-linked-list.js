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
    // inorder traversal
    // prev.right = curr
    if (root == null) return;
    const stack = [root];
    let prev = null;
    while(stack.length > 0){
        const curr = stack.pop();
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
        if(prev){
            prev.right = curr;
            prev.left = null;
            curr.left = null;
        } 
        prev = curr;
    }
    return root;
};