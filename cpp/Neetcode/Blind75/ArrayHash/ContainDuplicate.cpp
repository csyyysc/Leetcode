class Solution
{
public:
    bool hasDuplicate(vector<int> &nums)
    {
        int size = nums.size();

        for (int i = 0; i < size; i++)
        {
            for (int j = i + 1; j < size; j++)
            {
                int left = nums[i];
                int right = nums[j];

                if (left == right)
                    return true;
            }
        }
        return false;
    }

    bool hasDuplicateOpt(vector<int> &nums)
    {
        unordered_set<int> s;
        for (int num : nums)
        {
            if (s.count(num))
                return true;
            s.insert(num);
        }
        return false;
    }
};
