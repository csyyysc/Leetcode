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
var oddEvenList = function(head) {
    if(!head || !head.next || !head.next.next) return head;

    let odd = new ListNode(head.val);
    let even = new ListNode(head.next.val);
    let oddPtr = odd;
    let evenPtr = even;
    let ptr = head.next.next;
    let count = 2;

    while(ptr !== null) {
        count++;
        if(count % 2 === 0) {
            let newNode = new ListNode(ptr.val);
            evenPtr.next = newNode;
            evenPtr = evenPtr.next;
        } else {
            let newNode = new ListNode(ptr.val);
            oddPtr.next = newNode;
            oddPtr = oddPtr.next;
        }

        if(!ptr.next) {
            oddPtr.next = even;
        }
        ptr = ptr.next;
    }
    return odd;
};