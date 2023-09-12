/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = "";
    while(head) {
        str += head.val;
        head = head.next;
    }
    return str === str.split('').reverse().join('') ? true : false;
};

/**
 * @description Refernce Method1
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
    let str1 = str2 = "";

    while(head) {
        str1 = `${str1}${head.val}`;
        str2 = `${head.val}${str2}`;
        head = head.next;
    }
    return str1 === str2;
}

/**
 * @description Floyd's Cycle Detection Algorithm
 */
var isPalindrome = function(head) {
    let slow = head, fast = head, prev, temp
    /**
     * When fast reaches the end of the list, the slow will be just at the middle of the list
     */
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
    prev = slow, slow = slow.next, prev.next = null // avoid endless loop
    while (slow)
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
    fast = head, slow = prev
    while (slow)
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    return true
};