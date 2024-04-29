class Solution:
    def minPartitions(self, n: str) -> int:
        nums = [int(d) for d in n]
        return max(nums)

    def minPartitions(self, n: str) -> int:
        for i in range(9, -1, -1):
            if(str(i) in n):
                return i