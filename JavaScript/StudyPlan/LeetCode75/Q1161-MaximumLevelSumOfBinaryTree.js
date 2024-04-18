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

var maxLevelSum = function(root) {
    let level = 1;
    if(!root) return level;

    let queue = [root];
    let maxSum = root.val;
    let height = 1;
    while(queue.length) { 
        let sum = 0;
        const len = queue.length;
    
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            sum += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(sum > maxSum) {
            maxSum = sum;
            level = height;
        }
        height++;
    }
    return level;
}

const maxLevelSum = (root) => {
    const levels = [];
    function traverse(node, height) {
        if(!node) return;
        levels[height] = levels[height] ? levels[height] + node.val : node.val;
        traverse(node.left, height + 1);
        traverse(node.right, height + 1);
    }
    traverse(root, 0);
    const max = Math.max(...levels);
    return 1 + levels.indexOf(max);
}