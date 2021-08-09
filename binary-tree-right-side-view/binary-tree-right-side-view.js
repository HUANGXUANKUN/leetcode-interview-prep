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
var rightSideView = function(root) {
    if (root == null) return [];
    const result = [];
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        const newQueue = [];
        result.push(queue[queue.length-1].val); // add right-most node to result
        for (const node of queue){
            // add left, add right
            if (node.left) newQueue.push(node.left);
            if (node.right) newQueue.push(node.right); 
        }
        queue = newQueue;
    }
    return result;
};