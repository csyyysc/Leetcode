/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopy = function (original, cloned, target) {
    function dfs(o, c) {
        if (!o) return;
        else if (o === target) return c;
        return dfs(o.left, c.left) || dfs(o.right, c.right);
    }

    return dfs(original, cloned);
};
