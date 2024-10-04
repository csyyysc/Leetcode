# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        self.max_zigzag = 0

        """
        Parameter:
            direction: 0/1 (left/right)
        """
        def dfs(node, direction, length):
            if not node:
                return length
            
            self.max_zigzag = max(self.max_zigzag, length)

            if direction == 0:
                dfs(node.left, 0, 1)
                dfs(node.right, 1, length + 1)
            else:
                dfs(node.left, 0, length + 1)
                dfs(node.right, 1, 1)

        dfs(root, 0, 0)
        dfs(root, 1, 0)
        return self.max_zigzag
    