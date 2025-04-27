class Solution
{
public:
    int missingNumber(vector<int> &nums)
    {
        sort(nums.begin(), nums.end());

        int total = 0;
        int n = nums.size();
        int all = n * (n + 1) / 2;
        for (auto &num : nums)
        {
            total += num;
        }

        return all - total;
    }

    int missingNumberOpt(vector<int>& nums) {
        int n = nums.size();

        int xorr = n;
        for (int i = 0; i < n; ++i) {
            xorr ^= i ^ nums[i];
        }
        return xorr;
    }
};
