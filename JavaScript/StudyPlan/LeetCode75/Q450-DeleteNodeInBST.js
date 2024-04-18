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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    function dfs(node) {
        if(!node) return null;
        if(node.val === key) {
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            let curr = node.right;
            while(curr.left) curr = curr.left;
            curr.left = node.left;
            return node.right;
        }
        if(node.val < key) node.right = dfs(node.right);
        else node.left = dfs(node.left);
        return node;
    }
    return dfs(root);
}

const deleteNode = (root, key) => {
    if(!root) return null;
    if(root.val === key) {
        if(!root.left || !root.right) 
            return root.right || root.left;
        let leftMin = root.left;
        while(leftMin.right) leftMin = leftMin.right
        leftMin.right = root.right;
        return root.left;
    }
    if(root.val > key) root.left = deleteNode(root.left, key);
    else root.right = deleteNode(root.right, key);
    return root;
}