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
    if (head == null) return head;
    const dummyHead = new ListNode(0);
    let resultNode = dummyHead;
    let curr = head;
    let isDuplicated = false;
    while(curr != null){
        // check with next node
        // if nextnode diff || last node, check if curr is duplicated
        if (curr.next == null || curr.val != curr.next.val){
            // check if curr is duplicated
            if (isDuplicated){
                isDuplicated = false;
            }else{
                // curr is not duplicated
                resultNode.next = curr;
                resultNode = resultNode.next;
            }
        } 
        // else if nextnode same, curr = curr.next
        else{
            // next is equal
            isDuplicated = true;
        }
        curr = curr.next;
    }
    // detached resultNode.next
    resultNode.next = null;
    return dummyHead.next;
    

};