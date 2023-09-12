/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @description Method1
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const nodes = [];

    function traverse(root, nodes) {
        if(root === null) return nodes;

        nodes = traverse(root.left, nodes);
        nodes.push(root.val);
        return traverse(root.right, nodes);
    }

    return traverse(root, nodes);
};

/**
 * @description Method2
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversalIteration = (root) => {
    const nodes = [];
    const nodeStack = [];

    while(root || nodeStack.length) {
        if(root) {
            nodeStack.push(root);
            root = root.left;
        } else {
            root = nodeStack.pop();
            nodes.push(root.val);
            root = root.right;
        }
    }

    return nodes;
}