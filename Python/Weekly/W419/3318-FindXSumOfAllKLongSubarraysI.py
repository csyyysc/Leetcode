class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        ans = []

        for i in range(len(nums) - k + 1):
            c = [[cnt, val] for val, cnt in Counter(nums[i:i+k]).items()]
            c = heapq.nlargest(x, c)
            ans.append(sum(val * cnt for val, cnt in c))

        return ans