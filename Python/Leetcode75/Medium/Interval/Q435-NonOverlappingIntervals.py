class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        
        cnt = 0
        intervals.sort(key=lambda x: x[1])
        l_end = intervals[0][1]

        for i in range(1, len(intervals)):
            start, end = intervals[i]

            if start < l_end:
                cnt += 1
            else:
                l_end = end
                
        return cnt