/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q) return root;
    let l = lowestCommonAncestor(root.left, p, q);
    let r = lowestCommonAncestor(root.right, p, q);
    return (l && r) ? root : (l || r);
};

const lowestCommonAncestor = function(root, p, q) {
    root.level = 0;
    let pNode, qNode;
    let stack = [root];

    while(stack.length && !(pNode && qNode)) {
        let node = stack.pop();
        if(node) {
            if(node.val === p.val) {
                pNode = node;
            }
            if(node.val === q.val) {
                qNode = node;
            }
            if(node.left) {
                node.left.level = node.level + 1;
                node.left.parent = node;
                stack.push(node.left);
            }
            if(node.right) {
                node.right.level = node.level + 1;
                node.right.parent = node;
                stack.push(node.right);
            }
        }
    }

    while(pNode.val !== qNode.val) {
        if(pNode.level > qNode.level) {
            pNode = pNode.parent;
        } else if(pNode.level < qNode.level) {
            qNode = qNode.parent;
        } else {
            qNode = qNode.parent;
            pNode = pNode.parent;
        }
    }

    return pNode;
}