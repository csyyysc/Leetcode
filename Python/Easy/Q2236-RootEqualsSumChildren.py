# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.val = 0

    def checkTree(self, root: Optional[TreeNode]) -> bool:
        self.val = root.val
        
        self.dfs(root.left)
        self.dfs(root.right)
        return self.val == 0

    def dfs(self, node):
        if not node:
            return
        self.val -= node.val
        self.dfs(node.left)
        self.dfs(node.right)
