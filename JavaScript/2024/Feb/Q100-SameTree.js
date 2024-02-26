/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    function traverse(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2 || t1.val !== t2.val) return false;
        return traverse(t1.left, t2.left) && traverse(t1.right, t2.right);
    }

    return traverse(p, q);
};

const isSameTree = (p, q) => {
    return JSON.stringify(p) === JSON.stringify(q);
};
