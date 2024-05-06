import re
class Solution:
    def __init__(self):
        self.vowels = set('aeiou')
        self.cons = set('bcdfghjklmnpqrstvwxyz')
        
    def checker(self, s, sets):
        return any(char in sets for char in s.lower()) 

    def isValid(self, word: str) -> bool:
        w_len = len(word)
        if w_len < 3:
            return False
        
        word = re.sub('[^a-zA-Z0-9]', '', word)
        new_w_len = len(word)
        if w_len != new_w_len:
            return False
        return self.checker(word, self.vowels) and self.checker(word, self.cons)        