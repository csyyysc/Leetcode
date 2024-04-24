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
var pairSum = function(head) {
    const nodeValues = [];

    let ptrHead = head;
    while(ptrHead) {
        nodeValues.push(ptrHead.val);
        ptrHead = ptrHead.next;
    }
    
    const nodeLen = nodeValues.length;
    let maxPairSum = nodeValues[0] + nodeValues[nodeLen - 1];
    let idx = 0;
    while(idx < nodeLen / 2) {
        if(maxPairSum < (nodeValues[idx] + nodeValues[nodeLen - 1 - idx])) {
            maxPairSum = nodeValues[idx] + nodeValues[nodeLen - 1 - idx];
        }
        idx++;
    }
    return maxPairSum;
};

const pairSum = (head) => {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let middle = slow;
    while(middle) {
        let nextNode = middle.next;
        middle.next = fast;
        fast = middle;
        middle = nextNode;
    }

    let ans = 0;
    let iter = head;
    while(fast) {
        let sum = iter.val + fast.va;
        ans = Math.max(ans, sum);
        iter = iter.next;
        fast = fast.next;
    }
    return ans;
}
