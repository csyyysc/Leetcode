class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        if len(set(suits)) == 1:
            return "Flush"

        m = {}

        for r in ranks:
            m[r] = m.get(r, 0) + 1

        for val in sorted(m.values(), reverse=True):
            if val >= 3:
                return "Three of a Kind"
            if val == 2:
                return "Pair"
            if val == 1:
                return "High Card"
