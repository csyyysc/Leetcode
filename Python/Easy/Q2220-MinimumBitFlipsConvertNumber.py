class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        cnt = 0
        start = bin(start)[2:]
        goal = bin(goal)[2:]
        max_len = max(len(start), len(goal))

        start = start.zfill(max_len)
        goal = goal.zfill(max_len)
        for s, g in zip(start, goal):
            if s is not g: cnt += 1
        return cnt
    
    def minBitFlips(self, start: int, goal: int) -> int:
        diff = start ^ goal
        diff = bin(diff)[2:]
        return [d for d in diff].count('1')