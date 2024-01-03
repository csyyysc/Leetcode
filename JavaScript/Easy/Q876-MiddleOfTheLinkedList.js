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
var middleNode = function (head) {
    let count = 0;
    let cur = head;

    while (cur) {
        count++;
        cur = cur.next;
    }

    let i = 0;
    while (i < Math.floor(count / 2)) {
        head = head.next;
        i++;
    }
    return head;
};

const middleNode = (head) => {
    let fast = (slow = head);
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
