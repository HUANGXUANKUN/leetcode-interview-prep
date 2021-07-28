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
    // BFS
    // last element in level
    if (root==null) return [];
    const result = [];
    let queue = [root];
    while(queue.length > 0){
        // push last value
        result.push(queue[queue.length-1].val);
        const newQueue = [];
        for (const curr of queue){
            if(curr.left){
                newQueue.push(curr.left);
            }
            if(curr.right){
                newQueue.push(curr.right);
            }
        }
        queue = newQueue;
        // console.log(queue)
    }
    return result;

};