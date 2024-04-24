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
 * @return {number}
 */
var minDiffInBST = function (root) {
    let prev = Infinity;
    let min = Infinity;

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        min = Math.min(min, Math.abs(prev - node.val));
        prev = node.val;
        dfs(node.right);
    }
    dfs(root);

    return min;
};
