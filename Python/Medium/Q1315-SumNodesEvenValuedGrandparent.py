# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        return self.dfs(root, None, None)
    
    def dfs(self, root: TreeNode, parent: TreeNode, grand: TreeNode) -> int:
        if not root:
            return 0
        else:
            s = self.dfs(root.left, root, parent) + self.dfs(root.right, root, parent)
            if grand and grand.val % 2 == 0:
                s += root.val
            return s