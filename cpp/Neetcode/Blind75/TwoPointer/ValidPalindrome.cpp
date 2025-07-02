class Solution
{
public:
    bool isPalindrome(string s)
    {
        string new_s;

        for (char c : s) {
            if (isalpha(c) || isdigit(c)) {
                new_s += tolower(c);
            }
        }

        int i = 0;
        int j = new_s.size() - 1;
        while (i <= j) {
            if (new_s[i] != new_s[j]) return false;
            ++i;
            --j;
        }

        return true;
    }

    bool isPalindromeOpt(string s)
    {
        int i = 0;
        int j = s.size() - 1;

        while (i < j) {
            while (i < j && !isalnum(s[i])) ++i;
            while (i < j && !isalnum(s[j])) --j;

            if (tolower(s[i]) != tolower(s[j])) return false;
            ++i;
            --j;
        }

        return true;
    }
};
