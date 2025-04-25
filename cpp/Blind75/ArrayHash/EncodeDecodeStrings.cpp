class Solution
{
public:
    string encode(vector<string> &strs)
    {
        string encoded;

        for (const auto& str : strs) {
            encoded += to_string(str.size()) + '#' + str;
        }

        return encoded;
    }

    vector<string> decode(string s)
    {
        vector<string> decoded;

        size_t i = 0;
        while (i < s.size()) {
            size_t j = s.find('#', i);
            int len = stoi(s.substr(i, j - i));
            decoded.push_back(s.substr(j + 1, len));
            i = j + len + 1;
        }
        return decoded;
    }
};
