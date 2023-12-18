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
 * @return {string}
 */
var tree2str = function(root) {
    const str = [];

    function dfs(node, str) {
        if(!node) return;
        
        str.push(node.val);
        if(!node.left && !node.right) return;

        str.push('(');
        dfs(node.left, str);
        str.push(')');

        if(node.right) {
            str.push('(');
            dfs(node.right, str);
            str.push(')');
        }
    }
    return str.join('');
}