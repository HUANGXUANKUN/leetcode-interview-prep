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
    const dfs = (root, p, q) => {
        if (root == null){
            return null;
        } 
        // console.log("visiting node = " + root.val)
        // check value
        if (root == p){
            pFound = true;
            // console.log("pFOund")
        }else if (root == q){
            qFound = true;
            // console.log("qFOund")
            
        }
        // find the children
        const leftFound = dfs(root.left, p, q)
        const rightFound = dfs(root.right, p, q)
        // console.log("At node = " + root.val)
        if (root == p || root == q){
            console.log("returning root")
            return root;
        }else if (leftFound && rightFound){
            console.log("both found")
            return root;
        }else if (leftFound || rightFound){
            console.log("returning p or q found")
            return leftFound || rightFound;
        }
        return null;    
    }
    
    let pFound = false,
        qFound = false;
    const found = dfs(root, p, q);
    if (pFound && qFound) return found;
    return null;
    
};