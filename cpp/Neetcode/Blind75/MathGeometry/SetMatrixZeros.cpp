class Solution
{
public:
    int ROWS, COLS;

    void setZeroes(vector<vector<int>> &matrix)
    {
        ROWS = matrix.size();
        COLS = matrix[0].size();

        set<int> rows;
        set<int> cols;

        for (int r = 0; r < ROWS; ++r)
        {
            for (int c = 0; c < COLS; ++c)
            {
                if (matrix[r][c] == 0)
                {
                    rows.insert(r);
                    cols.insert(c);
                }
            }
        }

        for (int r : rows)
        {
            for (int c = 0; c < COLS; ++c)
            {
                matrix[r][c] = 0;
            }
        }

        for (int c : cols)
        {
            for (int r = 0; r < ROWS; ++r)
            {
                matrix[r][c] = 0;
            }
        }
    }

    void setZeroesArray(vector<vector<int>> &matrix)
    {
        ROWS = matrix.size();
        COLS = matrix[0].size();

        vector<int> mark(ROWS + COLS, false);

        for (int r = 0; r < ROWS; ++r)
        {
            for (int c = 0; c < COLS; ++c)
            {
                if (matrix[r][c] == 0)
                {
                    mark[r] = true;
                    mark[ROWS + c] = true;
                }
            }
        }

        for (int r = 0; r < ROWS; ++r)
        {
            if (mark[r])
            {
                for (int c = 0; c < COLS; ++c)
                {
                    matrix[r][c] = 0;
                }
            }
        }

        for (int c = 0; c < COLS; ++c)
        {
            if (mark[c + ROWS])
            {
                for (int r = 0; r < ROWS; ++r)
                {
                    matrix[r][c] = 0;
                }
            }
        }
    }

    void setZeroesOpt(vector<vector<int>> &matrix)
    {
        ROWS = matrix.size();
        COLS = matrix[0].size();
        bool overlap = false;

        for (int r = 0; r < ROWS; ++r)
        {
            for (int c = 0; c < COLS; ++c)
            {
                if (matrix[r][c] == 0)
                {
                    matrix[0][c] = 0;

                    if (r > 0)
                    {
                        matrix[r][0] = 0;
                    }
                    else
                    {
                        overlap = true;
                    }
                }
            }
        }

        for (int r = 1; r < ROWS; ++r)
        {
            for (int c = 1; c < COLS; ++c)
            {
                if (matrix[0][c] == 0 || matrix[r][0] == 0)
                {
                    matrix[r][c] = 0;
                }
            }
        }

        if (matrix[0][0] == 0)
        {
            for (int r = 0; r < ROWS; ++r)
            {
                matrix[r][0] = 0;
            }
        }

        if (overlap)
        {
            for (int c = 0; c < COLS; ++c)
            {
                matrix[0][c] = 0;
            }
        }
    }
};
