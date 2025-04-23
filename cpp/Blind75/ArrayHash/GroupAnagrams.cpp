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
};
