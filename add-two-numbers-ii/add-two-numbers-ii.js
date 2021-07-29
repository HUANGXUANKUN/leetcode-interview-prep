/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const reverse = (head) => {
        let prev = null;
        let curr = head;
        while (curr != null){
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    let nodeA = reverse(l1);
    let nodeB = reverse(l2);
    let carry = 0;
    const dummyHead = new ListNode(0);
    let currNode = dummyHead;
    while(nodeA != null || nodeB!= null){
        let valueA = 0,
            valueB = 0;
        if(nodeA){
            valueA = nodeA.val;
            nodeA = nodeA.next;
        }
        if(nodeB){
            valueB = nodeB.val;
            nodeB = nodeB.next;
        }
        let currSum = valueA + valueB + carry;
        carry = 0;
        if (currSum >= 10){
            currSum %= 10;
            carry = 1
        }  
        currNode.next = new ListNode(currSum);
        currNode = currNode.next;
    }
    if (carry > 0){
        currNode.next = new ListNode(1);
    }
    return reverse(dummyHead.next);
};