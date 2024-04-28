class Solution:
    def addedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        nums1.sort(), nums2.sort()
        s = []
        
        for i in range(0, len(nums1)):
            diff = nums2[i] - nums1[i]
            s.append(diff)
        mode = max(s, key = s.count)
        return mode