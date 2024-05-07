# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:
        return self.build(nums)
        
    def build(self, arr: List[int]) -> Optional[TreeNode]:
        if len(arr) == 0:
            return
        m = max(arr)
        m_index = arr.index(m)
        l_arr, r_arr = arr[:m_index], arr[m_index + 1 :]

        tree = TreeNode(m)
        tree.left = self.build(l_arr)
        tree.right = self.build(r_arr)
        return tree