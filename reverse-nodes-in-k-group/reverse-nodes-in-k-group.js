/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const listReverse = (head, tail) => {
        let curr = head;
        let prev = null;
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            if(prev === tail) break;
        }
        // console.log("newhead = ", prev.val);
        return prev;
    }
    const dummyHead = new ListNode(0);
    let prevTail = null;
    let nextHead = head;
    while(nextHead != null){
        // find the kth node from current head
        let step = 1;
        let reverseTail = nextHead;
        while(step < k && reverseTail.next){
            step += 1;
            reverseTail = reverseTail.next;
        }
        if(step !== k){
            // last
            prevTail.next = nextHead;
            break;
        }
        // console.log("reverse tail found = " + reverseTail.val)
        const next = reverseTail.next;
        const newHead = listReverse(nextHead, reverseTail);
        // join with prevTail
        if(prevTail != null) {
            prevTail.next = newHead;
        }else{
            // attach to dummyHead
            dummyHead.next = newHead;
        }
        prevTail = nextHead; // new tail = currHead
        // console.log("new prevTail = " + prevTail.val);
        nextHead = next;
    }
    return dummyHead.next;
    
};