class Solution
{
public:
    string minWindow(string s, string t)
    {
        if (s.size() < t.size())
            return "";

        unordered_map<char, int> t_count;
        for (char c : t)
            ++t_count[c];

        unordered_map<char, int> window;
        int have = 0, need = t_count.size();
        int left = 0, min_len = INT_MAX;
        int start = 0;

        for (int right = 0; right < s.size(); ++right)
        {
            char c = s[right];
            ++window[c];

            if (t_count.count(c) && window[c] == t_count[c])
            {
                ++have;
            }

            while (have == need)
            {
                if ((right - left + 1) < min_len)
                {
                    min_len = right - left + 1;
                    start = left;
                }

                char l_char = s[left];
                --window[l_char];
                if (t_count.count(l_char) && window[l_char] < t_count[l_char])
                {
                    --have;
                }
                ++left;
            }
        }

        if (min_len == INT_MAX)
            return "";
        return s.substr(start, min_len);
    }
};
