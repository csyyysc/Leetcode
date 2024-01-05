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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let tree = new TreeNode();
    const nodes = [];

    function dfs(node) {
        if (!node) return;

        nodes.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);

    nodes.sort((a, b) => a - b).reverse();
    let p = tree;
    while (nodes.length) {
        const val = nodes.pop();
        p.val = val;
        if (nodes.length) {
            p.right = new TreeNode();
            p = p.right;
        }
    }

    return tree;
};

const increasingBST = (root) => {
    let tree = new TreeNode(null);
    let node = tree;

    const dfs = (root) => {
        if (!root) return null;
        dfs(root.left);

        node.right = root;
        root.left = null;
        node = root;

        dfs(root.right);
    };
    dfs(root);

    return tree.right;
};
