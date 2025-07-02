class Solution
{
public:
    int characterReplacement(string s, int k)
    {
        int lrs = 0;
        int left = 0;
        int max_count = 0;
        vector<int> count(26, 0);

        for (int right = 0; right < s.size(); ++right)
        {
            char c = s[right];
            ++count[c - 'A'];
            max_count = max(max_count, count[c - 'A']);

            while ((right - left + 1) - max_count > k)
            {
                --count[s[left] - 'A'];
                ++left;
            }

            lrs = max(lrs, right - left + 1);
        }

        return lrs;
    }
};
