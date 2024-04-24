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
 * @return {number[]}
 */
var findMode = function(root) {
    let val = null, cur = 0, max = 0, modes = [];

    function traverse(node) {
        if(!node) return;

        traverse(left);
        
        cur = (node.val === val) ? cur + 1 : 1;
        if(cur === max) {
            modes.push(node.val);
        } else if(cur > max) {
            max = cur;
            modes = [node.val];
        }
        val = node.val;
        traverse(right);
    }
    traverse(root);
    return modes;
}