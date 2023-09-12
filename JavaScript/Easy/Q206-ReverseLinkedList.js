/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @note Reference Method1
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while(curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};

/**
 * @note Reference Method2
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head, prev = null) => {
    if(!head) return prev;
    let next = head.next;
    head.next = prev;
    return reverseList(next, head);
};