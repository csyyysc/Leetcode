class Solution {
public:
    int scoreOfString(string s) {
        int scores = 0;

        for(int i = 0; i < s.length() - 1; i++) {
            scores += abs(int(s[i + 1]) - int(s[i]));
        }

        return scores;
    }
};