# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.nodes = []

    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        self.dfs(root)
        m = max(self.nodes, key=lambda x: x[1])
        s = sum(n[0] if n[1] == m[1] else 0 for n in self.nodes)
        return s

    def dfs(self, root, depth=0) -> None:
        if root is None:
            return
        else:
            self.nodes.append([root.val, depth])
            if root.left:
                l = self.dfs(root.left, depth + 1)
            if root.right:
                r = self.dfs(root.right, depth + 1)

    # Using BFS 
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        q = deque([root])
        ans = []
        while q:
            print(q)
            curr = []
            for _ in range(len(q)):
                node = q.popleft()
                curr.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            ans.append(curr)
        return sum(ans[-1])