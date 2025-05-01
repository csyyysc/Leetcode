class Solution
{
public:
    int findMin(vector<int> &nums)
    {
        int l = 0;
        int r = nums.size() - 1;
        int min_n = INT_MAX;

        while (l <= r)
        {
            int mid = l + (r - l) / 2;

            int l_n = nums[l];
            int m_n = nums[mid];
            int r_n = nums[r];

            if (l_n <= r_n)
            {
                if (l_n <= m_n)
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
                if (r_n <= m_n)
                {
                    l = mid + 1;
                }
                else
                {
                    r = mid - 1;
                }
            }
            min_n = min(min_n, m_n);
        }

        return min_n;
    }
};
