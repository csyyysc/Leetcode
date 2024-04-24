/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @note Reference Method1
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return root;

    invertTree(root.left);
    invertTree(root.right);

    const curr = root.left;
    root.left = root.right;
    root.right = curr;
    return root;
};

/**
 * @note Reference Method2
 */
const invertTree = (root) => {
    if(root === null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}

/**
 * @note Reference Method3
 */
const invertTree = (root) => {
    const stack = [root];
    while(stack.length) {
        const n = stack.pop();
        if(n !== null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }
    return root;
}

/**
 * @note Reference Method4
 */
const invertTree = (root) => {
    const queue = [root];
    while(queue.length) {
        const n = queue.shift();
        if(n !== null) {
            [n.left, n.right] = [n.right, n.left];
            queue.push(n.left, n.right);
        }
    }
    return root;
}