/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let foundCount = 0;
    const dfs = (root, p, q) => {
        if (root == null) return null;
        
        // check curr value
        let found = false;
        if (root == p || root == q){
            foundCount += 1;
            found = true;
        }
        const leftRes = dfs (root.left, p, q);
        const rightRes = dfs (root.right, p, q);
        if(leftRes && rightRes) {
            return root; // common
        }
        else if (found && (leftRes || rightRes)) return root; // root is res
        else if (found) return root;
        return leftRes || rightRes;
    }
    const res = dfs(root, p, q);
    if(foundCount == 2) return res;
    return null;
};