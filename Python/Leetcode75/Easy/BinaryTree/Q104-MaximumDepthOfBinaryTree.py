# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if node == None:
                return 0

            l_depth = dfs(node.left)
            r_depth = dfs(node.right)

            return max(l_depth + 1, r_depth + 1)
        dfs(root)

        return dfs(root)
                
    def maxDepthOptimized(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))