class Solution
{
public:
    vector<vector<int>> combs;
    vector<vector<int>> combinationSum(vector<int> &nums, int target)
    {
        vector<int> curr;
        backtrack(nums, curr, target, 0);
        return combs;
    }

    void backtrack(vector<int> &nums, vector<int> &curr, int target, int idx)
    {
        if (target == 0)
        {
            combs.push_back(curr);
            return;
        }

        if (target < 0 || idx >= nums.size())
        {
            return;
        }

        curr.push_back(nums[idx]);
        backtrack(nums, curr, target - nums[idx], idx);
        curr.pop_back();
        backtrack(nums, curr, target, idx + 1);
    }

    void backtrackLoop(vector<int> &nums, vector<int> &curr, int target, int start)
    {
        if (target == 0)
        {
            combs.push_back(curr);
            return;
        }

        if (target < 0 || start >= nums.size())
        {
            return;
        }

        for (int i = start; i < nums.size(); i++)
        {
            curr.push_back(nums[i]);
            backtrack(nums, curr, target - nums[i], i);
            curr.pop_back();
        }
    }
};
