class Solution
{
public:
    int search(vector<int> &nums, int target)
    {
        int size = nums.size();

        for (int i = 0; i < size; ++i)
        {
            int num = nums[i];
            if (num == target)
                return i;
        }
        return -1;
    }

    int searchOpt(vector<int> &nums, int target)
    {
        int l = 0;
        int r = nums.size() - 1;

        while (l <= r)
        {
            int mid = l + (r - l) / 2;

            if (nums[mid] == target)
                return mid;

            int l_n = nums[l];
            int m_n = nums[mid];
            int r_n = nums[r];

            if (l_n <= m_n)
            {
                if (l_n <= target && target < m_n)
                {
                    r = mid - 1;
                }
                else
                {
                    l = mid + 1;
                }
            }
            else
            {
                if (m_n < target && target <= r_n)
                {
                    l = mid + 1;
                }
                else
                {
                    r = mid - 1;
                }
            }
        }

        return -1;
    }
};
