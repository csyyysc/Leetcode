# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        self.pairs = 0

        def scanPaths(node, remainSum):
            if not node:
                return 
            
            if node.val == remainSum:
                self.pairs += 1

            scanPaths(node.left, remainSum - node.val)
            scanPaths(node.right, remainSum - node.val)

        def dfs(node):
            if not node:
                return 
            
            scanPaths(node, targetSum)
            
            dfs(node.left)
            dfs(node.right)
        
        dfs(root)
        return self.pairs