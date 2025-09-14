from typing import List

# https://leetcode.com/problems/merge-intervals/description/


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals = sorted(intervals, key=lambda interval: interval[0])

        n = len(intervals)
        mergedIntervals = []
        newStart, newEnd = intervals[0]
        for i in range(1, n):
            nextStart, nextEnd = intervals[i]

            if newEnd < nextStart:
                mergedIntervals.append([newStart, newEnd])
                newStart, newEnd = nextStart, nextEnd
            elif nextStart <= newEnd:
                newStart = min(newStart, nextStart)
                newEnd = max(newEnd, nextEnd)

        if newStart is not None and newEnd is not None:
            mergedIntervals.append([newStart, newEnd])

        return mergedIntervals


if __name__ == "__main__":
    solution = Solution()
    print(solution.merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
