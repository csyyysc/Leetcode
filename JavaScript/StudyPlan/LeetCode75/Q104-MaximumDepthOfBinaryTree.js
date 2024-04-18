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
var maxDepth = function(root) {
    if(!root) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

const maxDepth = (root) => {
    let depth = 0;

    function depthTraverse(root, nodeDepth = 1) {
        if(!root) return null;

        if(nodeDepth > depth) {
            depth = nodeDepth;
        }

        depthTraverse(root.left, nodeDepth + 1);
        depthTraverse(root.right, nodeDepth + 1);
    }
    depthTraverse(root);
    return depth;
}