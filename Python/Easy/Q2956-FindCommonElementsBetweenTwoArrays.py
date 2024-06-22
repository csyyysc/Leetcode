class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        cnt1, cnt2 = 0, 0

        for i, n in enumerate(nums1):
            if n in nums2:
                cnt1 += 1
        for i, n in enumerate(nums2):
            if n in nums1:
                cnt2 += 1
        return [cnt1, cnt2]
