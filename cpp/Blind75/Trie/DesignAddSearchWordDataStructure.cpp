class TrieNode
{
    vector<TrieNode *> children;
    bool endOfWord;

    TrieNode() : children(26, nullptr), endOfWord(false) {}
}

class WordDictionary
{
public:
    WordDictionary()
    {
        root = new TrieNode();
    }

    void addWord(string word)
    {
        TrieNode *node = root;
        for (char c : word)
        {
            int index = c - 'a';
            if (node->children[index] == nullptr)
            {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
        }
        node->endOfWord = true;
    }

    bool search(string word)
    {
        return dfs(word, 0, root);
    }

private:
    bool dfs(string word, int j, TrieNode *root)
    {
        TrieNode *curr = root;

        for (int i = j; i < word.size(); ++i)
        {
            char c = word[i];

            if (c == '.')
            {
                for (TrieNode *child : curr->children)
                {
                    if (child != nullptr && dfs(word, i + 1, child))
                    {
                        return true;
                    }
                }
                return false;
            }
            else
            {
                int index = c - 'a';
                if (curr->children[index] == nullptr)
                {
                    return false;
                }
                curr = curr->children[index];
            }
        }
        return curr->endOfWord;
    }
};
