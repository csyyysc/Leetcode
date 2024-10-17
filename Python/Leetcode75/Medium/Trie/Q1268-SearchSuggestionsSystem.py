class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        ans = []
        prefix = ""
        products.sort()

        for ch in searchWord:
            prefix += ch
            words = []
            for product in products:
                if product.startswith(prefix):
                    words.append(product)
            ans.append(words[:3])

        return ans

class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEnd = False

class Trie:
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

    def startsWith(self, prefix: str) -> TrieNode:
        cur = self.root

        for c in prefix:
            if c not in cur.children:
                return None
            cur = cur.children[c]
        
        return cur

    def getWordsWithPrefix(self, node: TrieNode, prefix: str) -> List[str]:
        word = []

        def dfs(cur, path):
            if cur.isEnd:
                word.append(path)
            for c in sorted(cur.children.keys()):
                dfs(cur.children[c], path + c)

        dfs(node, prefix)
        return word


class SolutionTrie:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        trie = Trie()

        for product in products:
            trie.insert(product)

        ans = []
        prefix = ""
        
        for ch in searchWord:
            prefix += ch
            node = trie.trie.startswith(prefix)

            if node:
                ans.append(trie.getWordsWithPrefix(node, prefix)[:3])
            else:
                ans.append([])
                
        return ans




