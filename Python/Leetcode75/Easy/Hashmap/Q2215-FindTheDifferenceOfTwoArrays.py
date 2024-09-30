class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        diffs = [[] for _ in range(2)]

        for num in nums1:
            if num not in nums2 and num not in diffs[0]:
                diffs[0].append(num)
        
        for num in nums2:
            if num not in nums1 and num not in diffs[1]:
                diffs[1].append(num)

        return diffs
    
    def findDifferenceOptimized(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        s1, s2 = set(nums1), set(nums2)
        return [list(s1 - s2), list(s2 - s1)]
