class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        lso = 0
        cnt = 0
        is_deleted = False

        start = 0
        for end in range(len(nums)):
            if nums[end] == 1:
                cnt += 1
            else:
                if is_deleted:
                    while nums[start] == 1:
                        cnt -= 1
                        start += 1
                    start += 1
                
                is_deleted = True

            lso = max(lso, cnt)

        return lso if is_deleted else lso - 1