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
var deleteMiddle = function (head) {
    let countHead = head;

    let length = 1;
    while (countHead.next && countHead.val) {
        length++;
        countHead = countHead.next;
    }

    if (length === 1) return head.next;

    let newHead = head;
    let middleLen = Math.floor(length / 2);
    while (middleLen > 0) {
        middleLen--;
        if (middleLen === 0) {
            newHead.next = newHead.next.next;
        }
        newHead = newHead.next;
    }
    return head;
};
