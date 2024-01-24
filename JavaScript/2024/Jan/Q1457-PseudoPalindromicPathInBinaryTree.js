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
var pseudoPalindromicPaths = function (root) {
    let count = 0;
    const stack = [[root, 0]];

    while (stack.length) {
        let [node, path] = stack.pop();
        if (node) {
            /**
             * Bit Manipulation: 
                if a number appers with even times, it will cancel out, and if is palindromic,
                the final bit will result in 0 if using XOR with the result - 1
             */
            path ^= 1 << node.val;
            if (!node.left && !node.right) {
                if ((path & (path - 1)) === 0) count++;
            } else {
                stack.push([node.left, path]);
                stack.push([node.right, path]);
            }
        }
    }

    return count;
};
