/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const reverseLinkList = (node) => {
        let prev = null;
        let curr = node;
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    // reverse second half
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // slow at mid or mid-left(even)
    const secondHalf = slow.next;
    // reverse secondHead
    let secondHead = reverseLinkList(secondHalf);
    // iterate firstHead and secondHead, 
    // secondHead.length <= firstHead.length
    let firstHead = head;
    while(secondHead){
        // compare value
        if(firstHead.val != secondHead.val){
            return false;
        }
        firstHead = firstHead.next;
        secondHead = secondHead.next;
    }
    return true;
};