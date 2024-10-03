# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        nodes = []
        queue = [root]
        while len(queue):
            level_len = len(queue)
            print(level_len)
            for i in range(level_len):
                node = queue.pop(0)
                if i == level_len - 1:
                    nodes.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return nodes