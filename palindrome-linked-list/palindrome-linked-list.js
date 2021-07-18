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

// 1 2 3 4 5
//     .   .
var isPalindrome = function(head) {
    const reverseLinkList = (startNode) => {
        let prev = null;
        let currNode = startNode;
        while(currNode != null){
            const nextNode = currNode.next;
            currNode.next = prev;
            prev = currNode;
            currNode = nextNode;
        }
        return prev;
    }
    // slow fast pointer
    if (!head) return false;
    
    // if only one node
    if (!head.next) return true;
    
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // slow is either the middle, or middle_left [1, (2), 3] or [1,(2),3,4]
    let secondHead = slow.next;
    // reverse secondList
    let reversedSecondHead = reverseLinkList(secondHead);
    let firstHead = head;
    while (reversedSecondHead != null){
        if (firstHead.val != reversedSecondHead.val){
            return false;
        }
        firstHead = firstHead.next;
        reversedSecondHead = reversedSecondHead.next;
    }
    return true;
    
};