class Solution
{
public:
    vector<int> topKFrequent(vector<int> &nums, int k)
    {
        map<int, int> m;

        for (auto num : nums)
        {
            m[num]++;
        }

        vector<pair<int, int>> ks(m.begin(), m.end());
        sort(ks.begin(), ks.end(), [](const auto &a, const auto &b)
             { return a.second > b.second; });

        vector<int> ans;
        for (int i = 0; i < k; ++i)
        {
            ans.push_back(ks[i].first);
        }

        return ans;
    }

    vector<int> topKFrequentOpt(vector<int>& nums, int k) {
        unordered_map<int, int> m;
        vector<vector<int>> f(nums.size() + 1);

        for (int num : nums) {
            m[num]++;
        }

        for (const auto& pair : m) {
            f[pair.second].push_back(pair.first);
        }

        vector<int> ans;
        for (int i = f.size() - 1 ; i > 0; --i) {
            for (int num : f[i]) {
                ans.push_back(num);
                if (ans.size() == k) return ans;
            }
        }

        return ans;
    }
};