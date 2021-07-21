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
    let pFound = false,
        qFound = false;
    const dfs = (root, p, q) => {
        if (root == null) return null;
        // check root val
        // console.log(root.val)
        if (root == p){
            // console.log("p found")
            pFound = true;
        } 
        if (root == q){
            // console.log("q found")
            qFound = true;
        }
        const leftFound = dfs(root.left, p, q);
        const rightFound = dfs(root.right, p, q);
        if (root == p || root == q){ // itSelf can be LCA
            return root;
        }
        if (leftFound && rightFound){ // LCA
            return (root);
        }
        if (leftFound || rightFound){ // LCA is in subtree
            return leftFound || rightFound;
        }
    }
    const result = dfs (root, p, q);
    if (pFound && qFound) return result;
    return null;
    
};