/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // headA then headB
    // headB then headA
    let nodeA = headA;
    let nodeB = headB;
    while (nodeA != nodeB){
        if(nodeA == null) {
            nodeA = headB;
        }else{
            nodeA = nodeA.next;
        }
        if(nodeB == null) {
            nodeB = headA;
        }else{
            nodeB = nodeB.next;
        }
    } 
    return nodeA;

};