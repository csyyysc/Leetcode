/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];

    const vals = [root.val];
    
    function preTraversal(node) {
        if(!node) return;

        const queue = [...node.children];
        while(queue.length) {
            const node = queue.shift();
            if(!node) continue;

            vals.push(node.val);

            for(const child of node.children.reverse()) {
                queue.unshift(child);
            }
        }
    }

    preTraversal(root);
    
    return vals;
};