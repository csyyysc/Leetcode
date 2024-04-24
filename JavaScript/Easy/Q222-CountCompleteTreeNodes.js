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
var countNodes = function(root) {
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
    return nodes.length;
};


/**
 * @note Reference Method1
 */
const countNodes = (root) => {
    function leftDepth(node) {
        return node ? leftDepth(node.left) + 1 : 0;
    }

    function rightDepth(node) {
        return node ? rightDepth(node.right) + 1 : 0;
    }

    function traverse(node) {
        const leftLen = leftDepth(node);
        const rightLen = rightDepth(node);

        if(leftLen === rightLen) return Math.pow(2, leftLen) - 1;
        return traverse(node.left) + traverse(node.right) + 1;
    }
    return traverse(root);
}