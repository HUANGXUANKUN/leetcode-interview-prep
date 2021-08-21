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
var mergeTwoLists = function(l1, l2) {
    const dummyHead = new ListNode(0);
    let curr = dummyHead;
    while(l1 || l2){
        if(l1 && l2){
            if (l1.val <= l2.val){
                curr.next = l1;
                curr = curr.next;
                l1 = l1.next;
            }else{
                curr.next = l2;
                curr = curr.next;
                l2 = l2.next;
            }
        }else if(l1){
            curr.next = l1;
            curr = curr.next;
            l1 = l1.next;
        }else{
            curr.next = l2;
            curr = curr.next;
            l2 = l2.next;
        }
        // console.log(curr.val);
    }
    curr.next = null; // break the tail
    return dummyHead.next;
};