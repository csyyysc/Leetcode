# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        if not root:
            return 0

        self.cnt = 0
        self.dfs(root, float('-inf'))
        return self.cnt

    def dfs(self, node, max_val):
        if not node:
            return

        if node.val >= max_val:
            self.cnt += 1

        max_val = max(max_val, node.val)
        self.dfs(node.left, max_val)
        self.dfs(node.right, max_val)
