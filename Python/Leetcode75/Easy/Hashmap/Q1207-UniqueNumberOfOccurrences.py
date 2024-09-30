class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        m = {}
        fq = set()

        for num in arr:
            m[num] = m.get(num, 0) + 1
        
        for _, f in m.items():
            fq.add(f)
        
        return len(set(arr)) == len(fq)

