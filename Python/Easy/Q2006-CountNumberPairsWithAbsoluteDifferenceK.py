class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        cnt = 0
        n = len(nums)

        for i in range(n):
            for j in range(i + 1, n):
                if abs(nums[i] - nums[j]) == k:
                    cnt += 1
       
        return cnt

    def countKDifference(self, nums: List[int], k: int) -> int:
        cnt = 0
        count = Counter(nums)

        for num in nums:
            if num + k in count:
                cnt += count[num + k]        

        return cnt
