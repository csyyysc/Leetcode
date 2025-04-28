class Solution
{
public:
    int lengthOfLongestSubstring(string s)
    {
        int lls = 0;
        int left = 0;
        vector<int> count(128, 0);

        for (int right = 0; right < s.size(); ++right)
        {
            char c = s[right];
            ++count[c];
            while (count[c] > 1)
            {
                --count[s[left]];
                ++left;
            }
            lls = max(lls, right - left + 1);
        }

        return lls;
    }
};
