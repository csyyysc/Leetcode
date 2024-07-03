class Solution:
    def findSubarrays(self, nums: List[int]) -> bool:
        m = {}
        n = len(nums)

        for i in range(n - 1):
            sub = nums[i : i + 2]
            m[str(sub)] = m.get(str(sub), 0) + sum(sub)

        return len(set(m.values())) != n - 1

    def findSubarrays(self, nums: List[int]) -> bool:
        s = set()

        for i in range(len(nums) - 1):
            sub_s = nums[i] + nums[i + 1]
            if sub_s in s:
                return True
            s.add(sub_s)
        return False
