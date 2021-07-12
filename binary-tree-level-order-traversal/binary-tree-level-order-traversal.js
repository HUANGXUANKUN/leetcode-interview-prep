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
var levelOrder = function(root) {
    if (root == null){
        return [];
    }
    const result = []
    let queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        const nextQueue = [];
        const tempResult = [];
        for (const node of queue){
            // add value to result
            tempResult.push(node.val);
            if(node.left){
                nextQueue.push(node.left);
            }if(node.right){
                nextQueue.push(node.right);
            }
        }
        result.push([...tempResult])
        queue = nextQueue;
    }
    return result
};