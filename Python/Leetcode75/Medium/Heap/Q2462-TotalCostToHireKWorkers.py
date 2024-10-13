import heapq

class Solution:
    def totalCost(self, costs: List[int], k: int, c: int) -> int:
        min_cost = 0
        n = len(costs)
        l_heap, r_heap = [], []

        l_ptr, r_ptr = 0, n - 1

        for i in range(min(c, n)):
            heapq.heappush(l_heap, (costs[l_ptr], l_ptr))
            l_ptr += 1
        
        for j in range(min(c, n)):
            if r_ptr >= l_ptr:
                heapq.heappush(r_heap, (costs[r_ptr], r_ptr))
                r_ptr -= 1

        while k > 0:
            if l_heap and r_heap:
                if l_heap[0][0] <= r_heap[0][0]:
                    cost, _ = heapq.heappop(l_heap)
                    if l_ptr <= r_ptr:
                        heapq.heappush(l_heap, (costs[l_ptr], l_ptr))
                        l_ptr += 1
                else:
                    cost, _ = heapq.heappop(r_heap)
                    if l_ptr <= r_ptr:
                        heapq.heappush(r_heap, (costs[r_ptr], r_ptr))
                        r_ptr -= 1
            elif l_heap:
                cost, _ = heapq.heappop(l_heap)
                if l_ptr <= r_ptr:
                    heapq.heappush(l_heap, (costs[l_ptr], l_ptr))
                    l_ptr += 1
            elif r_heap:
                cost, _ = heapq.heappop(r_heap)
                if l_ptr <= r_ptr:
                    heapq.heappush(r_heap, (costs[r_ptr], r_ptr))
                    r_ptr -= 1
            
            min_cost += cost
            k -= 1

        return min_cost