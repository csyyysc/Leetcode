/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    if (!root) return false;

    let prevVal = null;
    const queue = [[root, 0]];

    while (queue.length) {
        const size = queue.length;
        const currLevel = queue[0][1];

        const parity = currLevel % 2 === 0 ? 1 : 0;

        for (let i = 0; i < size; i++) {
            const [node, level] = queue.shift();

            if (
                node.val % 2 !== parity ||
                (prevVal !== null && (currLevel % 2 === 0 ? node.val <= prevVal : node.val >= prevVal))
            )
                return false;

            if (node.left) queue.push([node.left, level + 1]);
            if (node.right) queue.push([node.right, level + 1]);
        }
        prevVal = null;
    }

    return true;
};
