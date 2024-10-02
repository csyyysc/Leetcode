# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        nodes1 = []
        nodes2 = []

        self.dfs(root1, nodes1)
        self.dfs(root2, nodes2)

        return nodes1 == nodes2

    def dfs(self, node, leafs):
        if node == None:
            return
        if node.left:
            self.dfs(node.left, leafs)
        if node.right:
            self.dfs(node.right, leafs)
        if node.left == None and node.right == None:
            leafs.append(node.val)

    def leafSimilarOptimized(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def dfs(node):
            if not node:
                return []
            if not node.left and not node.right:
                return [node.val]
            return dfs(node.left) + dfs(node.right)

        return dfs(root1) == dfs(root2)