class Solution {
    public:
        bool isValidSudoku(vector<vector<char>>& board) {
            for (int i = 0; i < 9; ++i) {
                vector<int> row_count(9, 0), col_count(9, 0);
                for (int j = 0; j < 9; ++j) {
                    if (board[i][j] != '.') {
                        int c = board[i][j] - '1';
                        if (row_count[c]++) return false;
                    }
    
                    if (board[j][i] != '.') {
                        int c = board[j][i] - '1';
                        if (col_count[c]++) return false;
                    }
                }
            }
    
            vector<int> box_count(9);
            for (int i = 0; i < 9; i += 3) {
                for (int j = 0; j < 9; j += 3) {
                    fill(box_count.begin(), box_count.end(), 0);
                    for (int k = 0; k < 9; ++k) {
                        int b_i = i + k / 3;
                        int b_j = j + k % 3;
                        char c = board[b_i][b_j];
    
                        if (c != '.') {
                            if (box_count[c - '1']++) return false;
                        }
                    }
                }
            }
    
            return true;
        }
    };
    