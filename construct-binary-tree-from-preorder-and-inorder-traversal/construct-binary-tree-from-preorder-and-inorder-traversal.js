/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const build = (inorder, in_left, in_right, preorder, preorder_index, inorder_map) =>{
        // console.log("inleft = " + in_left + " inright = " + in_right )
        if (preorder_index >= preorder.length) {
            return null;
        }
        if (in_left > in_right || in_left < 0 || in_right < 0 || in_left >= inorder.length || in_right >= inorder.length){
            return null;
        }
        const curr_value = preorder[preorder_index];
        // console.log(curr_value)
        const root = new TreeNode(curr_value);
        const curr_inorder_index = inorder_map.get(curr_value);
        const new_right_preorder_index = preorder_index + 1 + (curr_inorder_index - in_left)
        
        const leftChild = build(inorder, in_left, curr_inorder_index-1, preorder, preorder_index + 1, inorder_map);
        const rightChild = build(inorder, curr_inorder_index + 1, in_right, preorder, new_right_preorder_index, inorder_map)
        root.left = leftChild;
        root.right = rightChild;
        return root;
    }
    const inorder_map = new Map();
    for (let i = 0; i< inorder.length; i++){
        inorder_map.set(inorder[i], i);
    }
    return build(inorder, 0, inorder.length - 1, preorder, 0, inorder_map);
    
};