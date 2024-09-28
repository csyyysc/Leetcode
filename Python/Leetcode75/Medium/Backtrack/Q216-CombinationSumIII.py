class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        combs = []

        def backtrack(target, current, start):
            if len(current) == k and target == 0:
                combs.append(current[:])
                return
            
            for num in range(start, 10):
                current.append(num)
                backtrack(target - num, current, num + 1)
                current.pop()
        backtrack(n, [], 1)

        return combs