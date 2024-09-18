# Backtrack
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        output_arr = []

        self.backtrack(output_arr, "", 0, 0, n)

        return output_arr

    def backtrack(self, output_arr, current_str, open_p, close_p, pairs):
        if(len(current_str) == pairs * 2):
            output_arr.append(current_str)
            return
        
        if (open_p < pairs):
            self.backtrack(output_arr, current_str + "(", open_p + 1, close_p, pairs)
        if (close_p < open_p):
            self.backtrack(output_arr, current_str + ")", open_p, close_p + 1, pairs)

