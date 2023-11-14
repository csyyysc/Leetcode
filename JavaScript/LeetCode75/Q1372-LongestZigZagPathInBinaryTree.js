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

var longestZigZag = function(root) {
    let max = 0;

    function dfs(root, dir, level) {
        if(!root) return;
        if(level > max) max = level;

        if(dir === 0) {
            dfs(root.left, 0, 1);
            dfs(root.right, 1, level + 1);
        } else if(dir === 1) {
            dfs(root.left, 0, level + 1);
            dfs(root.right, 1, 1);
        }
    }
    dfs(root.left, 0, 1);
    dfs(root.right, 1, 1);

    return max;
}