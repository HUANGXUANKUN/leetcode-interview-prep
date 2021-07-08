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
    // after a finish, continue on b
    // after b finish, continue on a
    // a= a + c + b -> reach intersect or null
    // b= b + c + a -> reach intersect or null
    
    let nodeA = headA, nodeB = headB;
    while (nodeA != nodeB){
        if(nodeA == null){
            nodeA = headB;
        }else{
            nodeA = nodeA.next;
        }
        if(nodeB == null){
            nodeB = headA;
        }else{
            nodeB = nodeB.next;
        }
    }
    return nodeA;
};