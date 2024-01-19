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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const paths = [];

    function dfs(node, path) {
        if (!node) return;

        if (!path) path += `${node.val}`;
        else path += `->${node.val}`;

        dfs(node.left, path);
        dfs(node.right, path);
        if (!node.left && !node.right) paths.push(path);
    }

    dfs(root, "");

    return paths;
};

const binaryTreePaths = (root) => {
    if (!root) return [];
    else if (!root.left && !root.right) return [`${root.val}`];
    else {
        const left = binaryTreePaths(root.left).map((x) => root.val + "->" + x);
        const right = binaryTreePaths(root.right).map((x) => root.val + "->" + x);
        return [...left, ...right];
    }
};
