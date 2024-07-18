class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        m = {}

        for w in strs:
            s_w = "".join(sorted(w))
            if s_w in m:
                m[s_w].append(w)
            else:
                m[s_w] = [w]
        return m.values()
