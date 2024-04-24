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
var postorderTraversal = function(root) {
    const visitedNodes = [];

    traverse(root)

    function traverse(root) {
      if(root === null) return;
      traverse(root.left);
      traverse(root.right);
      visitedNodes.push(root.val);
    }

    return visitedNodes;
};


const postorderTraversalIteration = (root) => {
    if(root === null) return [];
  
    const nodes = [];
    const nodeStack = [];
  
    nodeStack.push(root);
    while(nodeStack.length) {
      let node = nodeStack[nodeStack.length - 1];
      if(node.left) {
        nodeStack.push(node.left);
        node.left = null;
      } else if(node.right) {
        nodeStack.push(node.right);
        node.right = null;
      } else {
        nodes.push(nodeStack.pop().val);
      }
    }
    return nodes;
  }