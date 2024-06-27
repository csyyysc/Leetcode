class Solution:
    def mergeArrays(
        self, nums1: List[List[int]], nums2: List[List[int]]
    ) -> List[List[int]]:
        m = {}

        for pair in nums1:
            i, v = pair
            m[i] = m.get(i, 0) + v

        for pair in nums2:
            i, v = pair
            m[i] = m.get(i, 0) + v
        return sorted(m.items(), key=lambda x: x[0])
