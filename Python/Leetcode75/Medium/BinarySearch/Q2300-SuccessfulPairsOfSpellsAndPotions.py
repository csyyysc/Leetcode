class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        n = len(spells)
        m = len(potions)
        pairs = [0] * n
        potions = sorted(potions)

        def binary_search(spell: int) -> int:
            left, right = 0, m - 1

            while left <= right:
                mid = (left + right) // 2
                if spell * potions[mid] >= success:
                    right = mid - 1
                else:
                    left = mid + 1
            return m - left
        
        for i in range(n):
            pairs[i] = binary_search(spells[i])
        
        return pairs

         