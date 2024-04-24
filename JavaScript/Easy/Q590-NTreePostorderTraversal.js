/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const vals = [], stack = [root];

    while(stack.length) {
        const node = stack.pop();
        if(!node) continue;

        vals.push(node.val);
        stack.push(...node.children);
    }
    return vals.reverse();
}

const postorder = (root) => {
    const vals = [];

    function traverse(node) {
        if(!node) return;
        for(const child of node.children) {
            traverse(child);
        }
        vals.push(node.val);
    }

    traverse(root);

    return vals;
}