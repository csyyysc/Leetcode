from typing import List

# https://leetcode.com/problems/insert-interval/


class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        newIntervals = []
        newStart, newEnd = newInterval
        isAppend = False

        for interval in intervals:
            s, e = interval
            if isAppend or e < newStart:
                newIntervals.append(interval)
            elif s > newEnd:
                newIntervals.append([newStart, newEnd])
                newIntervals.append(interval)
                isAppend = True
            else:
                newStart = min(newStart, s)
                newEnd = max(newEnd, e)

        if not isAppend:
            newIntervals.append([newStart, newEnd])

        return newIntervals


if __name__ == "__main__":
    solution = Solution()
    print(solution.insert([[1, 3], [6, 9]], [2, 5]))
