/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const rootNodesOne = [];
    const rootNodesTwo = [];
    function traverse(root, nodes) {
        if (root && !root.left && !root.right) {
            nodes.push(root.val);
        }
        if (root.left) {
            traverse(root.left, nodes);
        }
        if (root.right) {
            traverse(root.right, nodes);
        }
    }

    traverse(root1, rootNodesOne);
    traverse(root2, rootNodesTwo);
    return JSON.stringify(rootNodesOne) === JSON.stringify(rootNodesTwo);
};
