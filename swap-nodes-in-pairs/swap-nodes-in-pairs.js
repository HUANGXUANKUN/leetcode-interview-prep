/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    const dummyHead = new ListNode(0);
    let currNode = head;
    let prevNode = null;
    while(currNode){
        // check if next
        const second = currNode.next;
        if(!second){
            // attach currNode to prev
            prevNode.next = currNode;
            break;
        }
        const nextNode = second.next; // store next currNode
        // swap
        second.next = currNode;
        currNode.next = null; // detach tail
        // attach to prev tail
        if(!prevNode){
            // attach to dummy
            dummyHead.next = second;
        }else{
            prevNode.next = second;
        }
        prevNode = currNode;
        currNode = nextNode;       
    }
    return dummyHead.next;
    
};