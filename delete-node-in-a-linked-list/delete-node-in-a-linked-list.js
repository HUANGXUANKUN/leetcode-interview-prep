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
    let currNode = node;
    let prevNode = null;
    while(currNode){
        // check if there is next node
        // if next node
        if (currNode.next){
            // next node value to curr node value
            currNode.val = currNode.next.val;
            prevNode = currNode;
            currNode = currNode.next;
        }
        else{
            prevNode.next = null; // detach last node
            currNode = null; // break
        }
    }
    
};