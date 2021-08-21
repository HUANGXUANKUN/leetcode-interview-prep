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
    if (root == null) return [];
    let queue = [];
    queue.push(root);
    const res = [];
    while(queue.length > 0){
        const currLevel = [];
        const newQueue = [];
        for(let node of queue){
            currLevel.push(node.val);
            if(node.left) newQueue.push(node.left);
            if(node.right) newQueue.push(node.right);
        }
        queue = newQueue;
        res.push(currLevel);
    }
    return res;
    
};