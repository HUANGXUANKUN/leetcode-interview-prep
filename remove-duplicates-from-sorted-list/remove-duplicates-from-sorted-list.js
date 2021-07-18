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
var deleteDuplicates = function(head) {
    // record the prev duplicate position
    if(!head || !head.next){
        return head; // if 0 or 1 nodes
    }
    let prev = head;
    let curr = head.next;
    while (curr != null){
        // check if duplicated with prev
        if (prev.val == curr.val){
            // duplicated, break connection of curr
            //dont update prev
            prev.next = curr.next;
            curr = curr.next;
        }else{
            // not duplicated, break connection 
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};