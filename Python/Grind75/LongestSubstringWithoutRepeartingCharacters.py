# https://leetcode.com/problems/longest-substring-without-repeating-characters/


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        m = set()

        max_len = 0
        l_ptr, r_ptr = 0, 0
        while l_ptr <= r_ptr and r_ptr < len(s):
            c = s[r_ptr]
            if (c in m):
                m.remove(s[l_ptr])
                l_ptr += 1
            else:
                m.add(c)
                r_ptr += 1
            max_len = max(max_len, len(m))

        return max_len


if __name__ == "__main__":
    s = "abcabcbb"
    print(Solution().lengthOfLongestSubstring(s))
