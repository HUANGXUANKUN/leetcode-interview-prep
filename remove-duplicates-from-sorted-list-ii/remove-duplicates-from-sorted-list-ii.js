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
    let prev = null;
    let newHead = new ListNode(0);
    let newResultNode = newHead;
    let curr = head;
    let hasDuplicated = false;
    while (curr != null && curr.next != null){
        if (curr.val == curr.next.val){
            hasDuplicated = true;
        }else{
            // if has duplicate, connect prev to null
            if (hasDuplicated){ // the end of duplication, curr is still duplicated
                hasDuplicated = false;   
            }else{
                newResultNode.next = curr;
                newResultNode = curr;
                prev = curr;
            }
        }
        curr = curr.next;
    }
    newResultNode.next = null;
    //consider last node
    if (!hasDuplicated){
        newResultNode.next = curr;
    }
    return newHead.next;
};