class Solution:
    def sumCounts(self, nums: List[int]) -> int:
        subs = []
        n = len(nums)

        for i in range(0, n + 1):
            for j in range(i + 1, n + 1):
                subs.append(list(set(nums[i:j])))
        return sum(len(cnt) ** 2 for cnt in subs)

    def sumCounts(self, nums: List[int]) -> int:
        s = 0
        n = len(nums)

        for i in range(0, n + 1):
            dis = set()
            for j in range(i, n):
                dis.add(nums[j])
                s += len(dis) ** 2
        return s
