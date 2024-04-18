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
var rightSideView = function(root) {
    const nodes = [];
    function dfs(node, h) {
        if(!node) return;
        nodes[h] = node.val;
        dfs(node.left, h + 1);
        dfs(node.right, h + 1);
    }
    dfs(root, 0);
    return nodes;
};

const rightSideView = (root) => {
    const arr = [];
    const queue = [root];
    if(!root) return arr;
    
    while(queue.length) {
        let n = queue.length;
        arr.push(queue[n - 1].val);
        if(n > 0) {
            for(let i = 0; i < n; i++) {
                node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
    }
    return arr;
}