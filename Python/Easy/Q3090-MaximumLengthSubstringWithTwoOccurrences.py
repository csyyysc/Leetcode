class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        cnt = {}
        left = max_len = 0

        for right in range(len(s)):
            c = s[right]
            if c in cnt:
                cnt[s[right]] += 1
            else:
                cnt[s[right]] = 1
            while any(val > 2 for val in cnt.values()):
                cnt[s[left]] -= 1
                if cnt[s[left]] == 0:
                    del cnt[s[left]]
                left += 1
            max_len = max(max_len, right - left + 1)

        return max_len
