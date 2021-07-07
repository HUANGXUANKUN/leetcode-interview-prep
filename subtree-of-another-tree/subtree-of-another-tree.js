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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    const locateRoot = (root, subRoot) =>{
        if(!root) return false;
        if (root.val == subRoot.val) {
            if(compareTree(root, subRoot)){
                return true;
            }
                
        }
        const left = locateRoot(root.left, subRoot) 
        const right = locateRoot(root.right, subRoot) 
        return left || right;
    }
    
    const compareTree = (rootA, rootB) =>{

        if(rootA == null || rootB == null){
            if (rootA == rootB) return true;
            return false;
        }
        
        if(rootA.val != rootB.val){
            console.log(rootA.val + " != " + rootB.val)
            return false;
        }
        // same value, compare children
        return compareTree(rootA.left, rootB.left) && compareTree(rootA.right, rootB.right);
    }
    
    return locateRoot(root, subRoot);

    
};