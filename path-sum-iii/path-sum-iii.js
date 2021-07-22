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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0;
    const dfs = (root, targetSum, currList) => {
        if (root == null) return;
        currList.push(root.val);
        // check currList, from postFix
        let currSum = 0;
        for (let i = currList.length - 1; i >= 0; i--){
            currSum += currList[i];
            if (currSum == targetSum) {
                // console.log(currList.slice(i))
                
                count++;
            }
        }
        // children
        dfs(root.left, targetSum, currList);
        dfs(root.right, targetSum, currList);
        // backtrack
        currList.pop();
    }
    dfs(root, targetSum, []);
    return count;
};