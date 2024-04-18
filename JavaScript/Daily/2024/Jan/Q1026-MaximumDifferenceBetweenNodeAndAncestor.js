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
var maxAncestorDiff = function (root) {
    if (!root) return 0;

    let diff = 0;

    function dfs(node, max, min) {
        if (!node) {
            diff = Math.max(diff, max - min);
            return;
        }

        max = Math.max(max, node.val);
        min = Math.min(min, node.val);

        dfs(node.left, max, min);
        dfs(node.right, max, min);
    }
    dfs(root, root.val, root.val);

    return diff;
};

const maxAncestorDiff = (root) => {
    if (!root) return 0;

    let diff = 0;
    const stack = [[root, root.val, root.val]];
    while (stack.length) {
        let [node, max, min] = stack.pop();
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);
        diff = Math.max(diff, max - min);

        if (node.left) stack.push([node.left, max, min]);
        if (node.right) stack.push([node.right, max, min]);
    }

    return diff;
};
