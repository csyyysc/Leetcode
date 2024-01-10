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
    const tree1 = [];
    const tree2 = [];

    function traverse(node, tree) {
        if (!node) return;

        if (!node.left && !node.right) tree.push(node.val);
        traverse(node.left, tree);
        traverse(node.right, tree);
    }
    traverse(root1, tree1);
    traverse(root2, tree2);

    return JSON.stringify(tree1) === JSON.stringify(tree2);
};
