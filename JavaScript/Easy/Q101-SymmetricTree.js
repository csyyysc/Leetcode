/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description Reference Method1
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
   
    return symmetryChecker(root.left, root.right);
};

function symmetryChecker(lnode, rnode) {
  if(!lnode && !rnode) {
    return true;
  } else if(!lnode || !rnode) {
    return false;
  } else if(lnode.val !== rnode.val)  {
    return false;
  }

  return symmetryChecker(lnode.left, rnode.right) && symmetryChecker(lnode.right, rnode.left);
}

/**
 * @description Reference Method2
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const queueOne = [root.left], queueTwo = [root.right];
  
    while(queueOne.length > 0 && queueTwo.length > 0) {
      const nodeOne = queueOne.shift();
      const nodeTwo = queueTwo.shift();
  
      console.log(nodeOne, nodeTwo);
  
      if(!nodeOne && !nodeTwo) continue;
      if(!nodeOne || !nodeTwo || nodeOne.val !== nodeTwo.val) return false;
  
      queueOne.push(nodeOne.left);
      queueTwo.push(nodeTwo.right);
      queueOne.push(nodeOne.right);
      queueTwo.push(nodeTwo.left);
    }
  
    return true;
  }