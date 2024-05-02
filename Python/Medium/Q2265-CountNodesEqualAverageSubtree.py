# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.cnt = 0
        self.vals = []
        self.n_lens = []

    def averageOfSubtree(self, root: TreeNode) -> int:
        self.dfs(root)
        
        for i in range(0, len(self.vals)):
            s = 0
            for j in range(i - self.n_lens[i] + 1, i + 1):
                s += self.vals[j]
            if (int(s / self.n_lens[i])) == self.vals[i]:
                self.cnt += 1
        return self.cnt

    def dfs(self, root) -> int:
        if root is None:
            return 0
        else:
            l_size = self.dfs(root.left)
            r_size = self.dfs(root.right)
            sub_size = 1 + l_size + r_size
            self.vals.append(root.val)
            self.n_lens.append(sub_size)
            return sub_size

    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        self.ans = 0

        def dfs(root):
            if root is None:
                return 0, 0
            else:
                left, l_n = dfs(root.left)
                right, r_n = dfs(root.right)
                if(root.val + left + right) // (l_n + r_n + 1) == root.val:
                    self.ans += 1
                return root.val + left + right, l_n + r_n + 1
        
        dfs(root)
        return self.ans