class Solution:
    def combinationSum(self, cands: List[int], target: int) -> List[List[int]]:
        combs = []

        def dfs(idx, current, total):
            if total == target:
                combs.append(current.copy())
                return
            if idx == len(cands) or total > target:
                return
            
            current.append(cands[idx])
            dfs(idx, current, total + cands[idx])
            current.pop()
            dfs(idx + 1, current, total)
        dfs(0, [], 0)

        return combs