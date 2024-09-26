class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        n = len(deck)
        deck = sorted(deck)
        deck_copy = deck.copy()
        queue = [i for i in range(n)]

        for i in range(n):
            out_card_idx = queue.pop(0)
            if len(queue) > 1:
                queue.append(queue.pop(0))
            deck_copy[out_card_idx] = deck[i] 
            
        return deck_copy