class Solution
{
public:
    vector<vector<string>> groupAnagrams(vector<string> &strs)
    {
        map<string, vector<string>> m;

        for (const string& word: strs) {
            string sortedWord = word;
            sort(sortedWord.begin(), sortedWord.end());
            m[sortedWord].push_back(word);
        }

        vector<vector<string>> group;
        for (auto& pair : m) {
            group.push_back(pair.second);
        }

        return group;
    }

    vector<vector<string>> groupAnagramsOpt(vector<string> &strs)
    {
        unordered_map<string, vector<string> m;

        for (const auto&s : strs) {
            vector<int> count(26, 0); 
            for (char c : s) {
                count[c - 'a']++;
            }

            string key = "";
            for (int i = 0; i < 26; i++) {
                key += ',' + to_string(count[i]);
            }
            m[key].push_back(s);
        }

        vector<vector<string>> group;
        for (const auto& pair : m) {
            group.push_back(pair.second);
        }

        return group;
    }
};
