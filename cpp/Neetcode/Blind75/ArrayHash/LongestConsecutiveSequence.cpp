class Solution
{
public:
    int longestConsecutive(vector<int>& nums) {
        int lcs = 0;
        unordered_map<int, int> m;

        for (int num : nums) {
            if (m.count(num)) continue;

            int left = m.count(num - 1) ? m[num - 1] : 0;
            int right = m.count(num + 1) ? m[num + 1] : 0;
            int len = left + 1 + right;

            m[num] = len;
            m[num - left] = len;
            m[num + right] = len;

            lcs = max(lcs, len);
        }

        return lcs;
    }
    int longestConsecutiveOpt(vector<int> &nums)
    {
        unordered_set<int> s;

        int lcs = 0;
        for (int num : nums) {
            if (!s.count(num - 1))  {
                int len = 1;
                int current = num;

                while(s.count(current + 1)) {
                    ++len;
                    ++current;
                }
            }

            lcs = max(lcs, len);
        }
        return lcs;
    }
};
