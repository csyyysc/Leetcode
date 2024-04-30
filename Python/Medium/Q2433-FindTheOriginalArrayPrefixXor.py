class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        arr = [pref[0]]
        for i in range(1, len(pref)):
            p = pref[i] ^ pref[i - 1]
            arr.append(p)
        return arr

    def findArray(self, pref: List[int]) -> List[int]:
        return [pref[0]] + [pref[i] ^ pref[i - 1] for i in range(1, len(pref))]