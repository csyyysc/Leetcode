# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        return self.dfs(root)
    
    def dfs(self, root: TreeNode) -> TreeNode:
        total = 0
        def inorder(node):
            nonlocal total
            if node:
                inorder(node.right)
                total += node.val
                node.val = total
                inorder(node.left)
        inorder(root)
        return root