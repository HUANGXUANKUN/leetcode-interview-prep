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

    if (!head || !head.next){
        return head;
    }
    // if curr != curr.next, then add curr to
    let dummyHead = new ListNode(0);
    let curr = head;
    let resultNode = dummyHead;
    let hasDuplicate = false;
    while (curr != null){
        if(curr.next && curr.val == curr.next.val){
            hasDuplicate = true;
        }else{
            //check if duplicated
            if(!hasDuplicate){
                //curr is not duplicated
                resultNode.next = curr;
                resultNode = resultNode.next;
            }
            hasDuplicate = false; 
        }
        curr = curr.next;
    }
    // break tail of resultNode
    resultNode.next = null;
    return dummyHead.next;
    
};