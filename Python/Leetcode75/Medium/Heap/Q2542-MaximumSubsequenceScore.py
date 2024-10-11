import heapq

class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        max_score = 0
        nums1_combs = itertools.combinations(nums1, k)
        nums2_combs = itertools.combinations(nums2, k)

        for comb1, comb2 in zip(nums1_combs, nums2_combs):
            max_num1 = sum(comb1)
            min_num2 = min(comb2)

            max_score = max(max_score, max_num1 * min_num2)

        return max_score
    
    def maxScoreHeap(self, nums1: List[int], nums2: List[int], k: int) -> int:
        pairs = sorted(zip(nums1, nums2), key=lambda x: -x[1])

        heap = []
        cur_score = 0
        max_score = 0

        for pair in pairs:
            num1, num2 = pair

            cur_score += num1
            heapq.heappush(heap, num1)

            if len(heap) > k:
                cur_score -= heapq.heappop(heap)
            if len(heap) == k:
                max_score = max(max_score, cur_score * num2)

        return max_score
