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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let result = null;
    function traverse(node) {
        if(!node) return;
        if(node.val === val) {
            result = node;
            return;
        }
        if(node.val > val) searchBST(node.left);
        if(node.val < val) searchBST(node.right);
    }
    traverse(root);
    return result;
}

const searchBST = (root, val) => {
    while(root && root.val !== val) {
        root = val < root.val ? root.left : root.right;
    } 
    return root;
}