# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        if not root:
            return []
        
        paths = []
        self.dfs(root, targetSum, [], paths)
        return paths
    
    def dfs(self, node, remainingSum, path, paths):
        path.append(node.val)

        if not node.left and not node.right and remainingSum == node.val:
            paths.append(list(path))

        if node.left:
            self.dfs(node.left, remainingSum - node.val, path, paths)
        if node.right:
            self.dfs(node.right, remainingSum - node.val, path, paths)
        path.pop()