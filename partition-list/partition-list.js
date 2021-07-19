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
    let currNode = head;
    let dummyHeadA = new ListNode(0);
    let nodeA = dummyHeadA;
    let dummyHeadB = new ListNode(0);
    let nodeB = dummyHeadB;
    while(currNode){
        if (currNode.val < x){
            nodeA.next = currNode;
            nodeA = nodeA.next;
        }else{
            nodeB.next = currNode;
            nodeB = nodeB.next;
        }
        currNode = currNode.next;
    }
    
    // disconnect nodeB
    nodeB.next = null;
    nodeA.next = dummyHeadB.next;
    return dummyHeadA.next;
    
};