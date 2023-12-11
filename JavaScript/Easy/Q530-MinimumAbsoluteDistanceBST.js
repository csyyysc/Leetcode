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
var getMinimumDifference = function(root) {
    let mad = Infinity;
    const nodes = [];

    function traverse(node) {
        if(!node) return;
        
        nodes.push(node.val)
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);

    for(let i = 0; i < nodes.length; i++) {
        for(let j = 0; j < i; j++) {
            mad = Math.min(mad, Math.abs(nodes[i] - nodes[j]));
        }
    }
    return mad;
};

const getMinimumDifference = (root) => {
    let min = Infinity, prev = -Infinity;

    function traverse(node) {
        if(!node) return null;

        traverse(node.left);
        min = Math.min(min, node.val - min);
        prev = node.val;
        traverse(node.right);
    }

    return min === Infinity ? null : min;
}