/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const headA = new ListNode(0); // less than x
    const headB = new ListNode(0); // greater than x
    let currNode = head;
    let nodeA = headA;
    let nodeB = headB;
    
    while (currNode){
        if(currNode.val < x){
            nodeA.next = currNode;
            nodeA = nodeA.next;
        }
        else if(currNode.val >= x){
            nodeB.next = currNode;
            nodeB = nodeB.next;
        }
        currNode = currNode.next;  
    }
    
    // join a and b
    nodeA.next = headB.next;
    nodeB.next = null; // cur tail
    return headA.next;
    
};