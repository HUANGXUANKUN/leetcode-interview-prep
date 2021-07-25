/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // currNode.val = currNode.next.val
    
    // if currNode.next == null, reaching last node, set currNode = null 
    let prev = null;
    let currNode = node;
    while (currNode){
        // if last
        if (currNode.next == null){
            prev.next = null;
        }else{
            currNode.val = currNode.next.val;
        }
        prev = currNode;
        currNode = currNode.next;
    }
    
};