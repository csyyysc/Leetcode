class Solution:
    def minNumberOfSeconds(self, mH: int, wT: List[int]) -> int:
        h = []

        for time in wT:
            heapq.heappush(h, (time, time, 1))
        
        out = float('-inf')
        while mH > 0:
            total, init, freq = heapq.heappop(h)
            heapq.heappush(h, (total + init*(freq + 1), init, freq + 1))
            mH -= 1
        
        for t, i, f in h:
            if f > 1:
                out = max(out, t - (i * f))
        return out