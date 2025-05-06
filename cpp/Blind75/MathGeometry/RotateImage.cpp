class Solution
{
public:
    int ROWS, COLS;

    void rotate(vector<vector<int>> &matrix)
    {
        ROWS = matrix.size();
        COLS = matrix[0].size();

        // Reverse the rows
        for (int i = 0; i < ROWS / 2; ++i)
        {
            swap(matrix[i], matrix[ROWS - 1 - i])
        }

        // Transpose the matrix
        for (int i = 0; i < ROWS; ++i)
        {
            for (int j = i + 1; j < COLS; ++j)
            {
                swap(matrix[i][j], matrix[j][i]);
            }
        }
    }

    void rotateCell(vector<vector<int>> &matrix) {
        ROWS = matrix.size();
        COLS = matrix[0].size();

        int l = 0;
        int r = COLS - 1;
        while (l < r) {
            for (int i = 0; i < r - l; ++i) {
                int t = l;
                int b = r;

                int tl = matrix[t][l + i];
                matrix[t][l + i] = matrix[b - i][l];
                matrix[b - i][l] = matrix[b][r - i];
                matrix[b][r - i] = matrix[t + i][r];
                matrix[t + i][r] = tl;
            }
            ++l;
            --r;
        }
    }
};
