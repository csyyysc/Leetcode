/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    const bits = [];

    while (head) {
        bits.push(head.val);
        head = head.next;
    }

    return parseInt(bits.join(""), 2);
};

const getDecimalValue = (head) => {
    let val = 0;

    while (head) {
        val = (val << 1) | head.val;
        head = head.next;
    }

    return val;
};
