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
var inorderTraversal = function(root) {
    if(root == null) return [];
    
    const stack = [];
    const output = [];
    let curr = root;
    
    while(stack.length > 0 || curr != null){
        // if have left, get the left most
        while(curr!=null){
            stack.push(curr);
            curr = curr.left; 
        }
        // this is the moment
        curr = stack.pop();
        console.log("at curr = ", curr.val);
        // dosomething here
        output.push(curr.val);
        // get right
        curr = curr.right;
    }
    return output;
};