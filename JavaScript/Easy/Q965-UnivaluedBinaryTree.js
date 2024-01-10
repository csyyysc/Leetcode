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
var isUnivalTree = function (root) {
    const uniq = root.val;
    const vals = [];

    function dfs(node) {
        if (!node) return;

        vals.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);

    return vals.every((val) => val === uniq);
};

function isUnivalTree(root, value = root.val) {
    if (!root) return true;

    if (root.val !== value) return false;

    return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
}

const isUnivalTree = (root) => {
    const queue = [root],
        val = root.val;

    while (queue.length) {
        const node = queue.shift();
        if (node.val !== val) return false;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return true;
};
