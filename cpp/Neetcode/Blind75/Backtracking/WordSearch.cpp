class Solution
{
public:
    int ROWS, COLS;
    vector<pair<int, int>> path;

    bool exist(vector<vector<char>> &board, string word)
    {
        int ROWS = board.size();
        int COLS = board[0].size();

        for (int r = 0; r < ROWS; ++r)
        {
            for (int c = 0; c < COLS; ++c)
            {
                if (backtrack(board, word, r, c, 0))
                {
                    return true;
                }
            }
        }

        return false;
    }

    bool backtrack(vector<vector<char>> &board, string word, int r, int c, int i)
    {
        if (i == word.size())
            return true;

        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] != word[i] || pair.count({r, c}))
            return false;

        path.insert({r, c});
        bool track = backtrack(board, word, r + 1, c, i + 1) ||
                     backtrack(board, word, r - 1, c, i + 1) ||
                     backtrack(board, word, r, c + 1, i + 1) ||
                     backtrack(board, word, r, c - 1, i + 1);
        path.erase({r, c});

        return track;
    }
}