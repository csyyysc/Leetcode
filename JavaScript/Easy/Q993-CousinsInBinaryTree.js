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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    function dfs(node, value, depth = 0, parent) {
        if (!node) return;
        if (node.val === value) return [depth, parent];

        return dfs(node.left, value, depth + 1, node.val) || dfs(node.right, value, depth + 1, node.val);
    }

    const [xDepth, xParent] = dfs(root, x);
    const [yDepth, yParent] = dfs(root, y);

    return xDepth === yDepth && xParent !== yParent;
};

const isCousins = (root, x, y) => {
    let curLevelNodes = [root];
    let curLevelValues = { [root.val]: -1 };

    while (true) {
        if (curLevelValues[x] && curLevelValues[y] && curLevelValues[x] !== curLevelValues[y]) return true;
        if (curLevelValues[x] || curLevelValues[y]) return false;

        const nextNodes = [];
        const nextValues = {};
        curLevelNodes.forEach((node) => {
            node.left && nextNodes.push(node.left) && (nextValues[node.left.val] = node.val);
            node.right && nextNodes.push(node.right) && (nextValues[node.right.val] = node.val);
        });
        curLevelNodes = nextNodes;
        curLevelValues = nextValues;
    }
    return false;
};
