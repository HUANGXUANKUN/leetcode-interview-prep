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
    let carry = 0;
    // use l2 to record the sum
    let nodeA = l1;
    let nodeB = l2;
    let resultHead = new ListNode(0);
    let resultNode = resultHead;
    
    while (nodeA || nodeB || carry > 0){
        let valueA = 0,
            valueB = 0;
        if (nodeA){
            valueA = nodeA.val;
            nodeA = nodeA.next;
        } 
        if (nodeB){
            valueB = nodeB.val;
            nodeB = nodeB.next;
        } 
        let sum = valueA + valueB + carry;
        if (sum >= 10){
            sum %= 10;
            carry = 1;
        }else{
            carry = 0;
        }
        resultNode.next = new ListNode(sum);
        resultNode = resultNode.next;
    }
    return resultHead.next;
};