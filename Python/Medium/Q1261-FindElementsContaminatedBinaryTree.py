# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class FindElements:
    def __init__(self, root: Optional[TreeNode]):
        self.hashset = set()
        self.recover(root, 0)

    def find(self, target: int) -> bool:
        if target in self.hashset:
            return True
        return False

    def recover(self, node, val):
        if node:
            node.val = val
            self.hashset.add(val)
            self.recover(node.left, 2 * val + 1)
            self.recover(node.right, 2 * val + 2)


# Your FindElements object will be instantiated and called as such:
# obj = FindElements(root)
# param_1 = obj.find(target)
