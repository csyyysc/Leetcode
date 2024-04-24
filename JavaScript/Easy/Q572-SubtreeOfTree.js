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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    function isEqual(node1, node2) {
        if (!node1 || !node2) return !node1 && !node2;
        if (node1.val !== node2.val) return false;
        return isEqual(node1.left, node2.left) && isEqual(node1.right, node2.right);
    }

    function dfs(node) {
        if (!node) return false;
        if (isEqual(node, subRoot)) return true;
        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};

const isSubtree = (root, subRoot) => {
    const isEqual = (tree, subTree) => {
        const queue = [[tree, subTree]];
        while (queue.length) {
            const [node1, node2] = queue.pop();

            if (!node1 && !node2) continue;
            if (!node1 || !node2 || node1.val !== node2.val) return false;
            queue.push([node1.right, node2.right], [node1.left, node2.left]);
        }
        return true;
    };

    const queue = [root];
    while (queue.length) {
        const node = queue.pop();
        if (!node) continue;
        if (isEqual(node, subRoot)) return true;
        queue.push(node.right, node.left);
    }

    return false;
};

function isSubtree(root, subRoot) {
    if (root == null && subRoot == null) return true;
    if (root != null && subRoot == null) return false;
    if (root == null && subRoot != null) return false;
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(r1, r2) {
    if (r1 == null && r2 == null) return true;
    if (r1 != null && r2 == null) return false;
    if (r1 == null && r2 != null) return false;
    if (r1.val != r2.val) return false;
    return isSameTree(r1.left, r2.left) && isSameTree(r1.right, r2.right);
}
