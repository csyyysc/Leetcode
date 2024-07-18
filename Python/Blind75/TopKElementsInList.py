class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        m = {}

        for n in nums:
            m[n] = m.get(n, 0) + 1

        m_l = sorted(list(m.items()), key=lambda items: items[1], reverse=True)
        return [key for key, val in m_l[:k]]
