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
var addTwoNumbers = function (l1, l2) {
    let list = new ListNode();
    let ptr = list;
    const nums1 = [],
        nums2 = [];

    function traverse(l, nums) {
        if (!l) return;
        nums.push(l.val);
        return traverse(l.next, nums);
    }
    traverse(l1, nums1);
    traverse(l2, nums2);

    while (nums1.length && nums2.length) {
        const sum = nums1.shift() + nums2.shift();
        const all = sum + ptr.val;

        if (all < 9 && ptr.val === 0) {
            ptr.val += sum;
        } else if (all === 10) {
            ptr.val = 0;
        } else {
            ptr.val = all % 10;
        }

        if (nums1.length || nums2.length || all >= 10) {
            ptr.next = all <= 9 ? new ListNode() : new ListNode(1);
            ptr = ptr.next;
        }
    }

    while (nums1.length) {
        const val = nums1.shift();
        const sum = ptr.val + val;
        if (sum <= 9) {
            ptr.val = sum;
        } else {
            const mod = sum % 10;
            ptr.val = mod;
        }

        if (nums1.length || sum >= 10) {
            ptr.next = sum <= 9 ? new ListNode() : new ListNode(1);
            ptr = ptr.next;
        }
    }

    while (nums2.length) {
        const val = nums2.shift();
        const sum = ptr.val + val;
        if (sum <= 9) {
            ptr.val = sum;
        } else {
            const mod = sum % 10;
            ptr.val = mod;
        }

        if (nums2.length || sum >= 10) {
            ptr.next = sum <= 9 ? new ListNode() : new ListNode(1);
            ptr = ptr.next;
        }
    }

    return list;
};
