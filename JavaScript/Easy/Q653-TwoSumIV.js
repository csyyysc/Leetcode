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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const vals = [];

    function traverse(node) {
        if(!node) return;

        vals.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    for(let i = 0; i < vals.length; i++) {
        for(let j = i + 1; j < vals.length; j++) {
            if(vals[i] + vals[j] === k) return true;
        }
    }
    return false;
};

const findTarget = (root, k) => {
    if(!root) return false;
    
    const set = new Set();
    const stack = [root];
    while(stack.length) {
        const node = stack.pop();
        if(set.has(k - node.val)) return true;
        set.add(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return false;
}