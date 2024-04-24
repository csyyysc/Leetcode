/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;

    let max = 0;
    for(const child of root.children) {
        max = Math.max(max, maxDepth(child));
    }
    return max + 1;
}

const maxDepth = (root) => {
    if(!root) return 0;

    let depth = 0;
    const queue = [root];

    while(queue.length) {
        let len = queue.length();
        
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            for(const child of node.children) queue.push(child);
        }
        depth++;
    }

    return depth;
}

function maxDepth(root) {
    if(!root) return 0;
    let max = -1;

    function helper(node, depth) {
        if(depth > max) max = depth;
        for(const child of node.children) {
            helper(child, depth + 1);
        }
    }

    helper(root, 1);

    return max;
}