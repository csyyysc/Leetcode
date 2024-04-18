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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let totalPath = 0;

    function preOrder(node) {
        if (node) {
            let pathCount = preOrderForEachRoot(node, targetSum);
            if (pathCount) {
                totalPath += pathCount;
            }
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    function preOrderForEachRoot(root, targetSum) {
        let count = 0;
        function preOrder2(node, target) {
            if (node) {
                target -= node.val;
                if (target === 0) count++;
                preOrder2(node.left, target);
                preOrder2(node.right, target);
            }
        }
        preOrder2(root, targetSum);
        return count;
    }

    preOrder(root);
    return totalPath;
};

const pathSum = function (root, targetSum) {
    const prefixSumMap = {};
    let count = 0;
    const dfs = (node, currPrefixSum) => {
        if (!node) {
            return;
        }
        currPrefixSum += node.val;
        if (currPrefixSum === targetSum) {
            count += 1;
        }
        count += prefixSumMap[currPrefixSum - targetSum] ?? 0;
        prefixSumMap[currPrefixSum] ??= 0;
        prefixSumMap[currPrefixSum] += 1;
        dfs(node.left, currPrefixSum);
        dfs(node.right, currPrefixSum);
        prefixSumMap[currPrefixSum] -= 1;
    };
    dfs(root, 0);
    return count;
};