class Trie:

    def __init__(self):
        self.trie = {}

    def insert(self, word: str) -> None:
        self.trie[word] = word

    def search(self, word: str) -> bool:
        if word in self.trie:
            return True
        return False

    def startsWith(self, prefix: str) -> bool:
        if len(self.trie) == 0:
            return False

        if prefix in self.trie:
            return True
        
        for word in self.trie:
            w_l = len(word)
            p_l = len(prefix)

            if p_l > w_l:
                continue
            else:
                match = True
                for i in range(p_l):
                    if prefix[i] != word[i]:
                        match = False
                        break
                if match:
                    return True

        return False

class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEnd = False

class TrieOptimized:

    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word: str) -> None:
        cur = self.root

        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        
        cur.isEnd = True

    def search(self, word: str) -> bool:
        cur = self.root

        for c in word:
            if c not in cur.children:
                return False
            cur = cur.children[c]
        
        return cur.isEnd

    def startsWith(self, prefix: str) -> bool:
        cur = self.root

        for c in prefix:
            if c not in cur.children:
                return False
            cur = cur.children[c]
            
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)