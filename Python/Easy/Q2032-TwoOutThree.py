class Solution:
    def twoOutOfThree(
        self, nums1: List[int], nums2: List[int], nums3: List[int]
    ) -> List[int]:
        m, o = {}, []
        nums1 = list(set(nums1))
        nums2 = list(set(nums2))
        nums3 = list(set(nums3))

        for n in nums1:
            m[n] = m.get(n, 0) + 1

        for n in nums2:
            m[n] = m.get(n, 0) + 1

        for n in nums3:
            m[n] = m.get(n, 0) + 1

        for k, v in m.items():
            if v >= 2:
                o.append(k)
        return o
