class Solution
{
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        set<vector<int>> ans;

        int size = nums.size();
        for (int i = 0; i < size - 2; ++i)
        {
            for (int j = i + 1; j < size - 1; ++j)
            {
                for (int k = j + 1; k < size; ++k)
                {
                    if (nums[i] + nums[j] + nums[k] == 0)
                    {
                        vector<int> trip = {nums[i], nums[j], nums[k]};
                        sort(trip.begin(), trip.end());
                        ans.insert(trip);
                    }
                }
            }
        }

        return vector<vector<int>>(ans.begin(), ans.end());
    }

    vector<vector<int>> threeSumOpt(vector<int> &nums)
    {
        vector<vector<int>> ans;
        sort(nums.begin(), nums.end());

        int size = nums.size();
        for (int i = 0; i < size - 2; ++i)
        {
            if (i > 0 && nums[i] == nums[i - 1])
                continue;

            int left = i + 1;
            int right = size - 1;

            while (left < right)
            {
                int sum = nums[left] + nums[i] + nums[right];

                if (sum == 0)
                {
                    ans.push_back({nums[left], nums[i], nums[right]});
                    ++left;
                    --right;
                    while (left < right && nums[left] == nums[left - 1])
                        ++left;
                    while (left < right && nums[right] == nums[right + 1])
                        --right;
                }
                else if (sum < 0)
                {
                    ++left;
                }
                else
                {
                    --right;
                }
            }
        }

        return ans;
    }
};
