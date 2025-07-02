class Solution
{
public:
    vector<int> spiralOrder(vector<vector<int>> &matrix)
    {
        vector<int> spiral;
        int ROWS = matrix.size();
        int COLS = matrix[0].size();

        int t = 0;
        int r = COLS - 1;
        int l = 0;
        int b = ROWS - 1;

        while (spiral.size() != ROWS * COLS)
        {
            for (int i = l; i <= r; ++i)
            {
                spiral.push_back(matrix[t][i]);
            }
            ++t;

            for (int i = t; i <= b; ++i)
            {
                spiral.push_back(matrix[i][r]);
            }
            --r;

            if (t <= b)
            {
                for (int i = r; i >= l; --i)
                {
                    spiral.push_back(matrix[b][i]);
                }
                --b;
            }

            if (l <= r)
            {
                for (int i = b; i >= t; --i)
                {
                    spiral.push_back(matrix[i][l]);
                }
                ++l;
            }
        }

        return spiral;
    }
};
