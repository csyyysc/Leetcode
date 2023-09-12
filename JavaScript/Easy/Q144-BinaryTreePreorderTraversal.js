/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const visitedNodes = [];
    
    function traverse(root, nodes) {
      if(root === null) return nodes;

      nodes.push(root.val);
      nodes = traverse(root.left, nodes);
      return traverse(root.right, nodes);
    }

    return traverse(root, visitedNodes);
};


const preorderTraversalIteration = (root) => {
    const nodes = [];
    const nodeStack = [];

    while(root || nodeStack.length) {
        if(root) {
            nodes.push(root.val);
            nodeStack.push(root);
            root = root.left;
        } else {
            root = nodeStack.pop();
            root = root.right;
        }
    }
    return nodes;
}