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
var sumRootToLeaf = function (root) {
    let sum = 0;

    function dfs(node, str) {
        if (!node) return;

        const binary = str + node.val;

        if (!node.left && !node.right) sum += parseInt(binary, 2);

        dfs(node.left, str);
        dfs(node.right, str);
    }
    dfs(root, "");

    return sum;
};
