# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return []

        curr_level = 1
        max_sum = float('-inf')
        max_sum_level = 0
        queue = [root]
        while len(queue):
            level_len = len(queue)
            level_sum = 0
            for i in range(level_len):
                node = queue.pop(0)
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if max_sum < level_sum:
                max_sum_level = curr_level
                max_sum = level_sum
            curr_level += 1

        return max_sum_level