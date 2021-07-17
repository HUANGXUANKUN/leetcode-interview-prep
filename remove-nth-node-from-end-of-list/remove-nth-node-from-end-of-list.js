/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 1 2 3 4 5 
var removeNthFromEnd = function(head, n) {
    // move n steps first
    let fast = head;
    for (let i = 0; i < n; i++){
        fast = fast.next;
        if (fast == null) break;
    }
    // if fast is null, then n is at head
    if (!fast){
        return head.next;
    }
    let slow = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next;
    }
    
    // slow.next is to be removed
    slow.next = slow.next.next; // if n = 1, then slow.next is null
    return head
    
};