class Solution
{
public:
    bool isValid(string s)
    {
        vector<char> stack;

        for (int i = 0; i < s.size(); ++i)
        {
            char c = s[i];
            if (c == '(' || c == '[' || c == '{')
            {
                stack.push_back(c);
            }
            else if (c == ')')
            {
                if (!stack.empty() && stack[stack.size() - 1] == '(')
                    stack.pop_back();
                else
                    return false;
            }
            else if (c == ']')
            {
                if (!stack.empty() && stack[stack.size() - 1] == '[')
                    stack.pop_back();
                else
                    return false;
            }
            else if (c == '}')
            {
                if (!stack.empty() && stack[stack.size() - 1] == '{')
                    stack.pop_back();
                else
                    return false;
            }
            else
            {
                return false;
            }
        }

        return stack.empty();
    }

    bool isValidOpt(string s) {
        stack<char> stack; 

        for (int i = 0; i < s.size(); ++i) {
            char c = s[i];
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                if (stack.empty()) return false;
                char top = stack.top();
                if ((c == ')' && top == '(') || 
                    (c == ']' && top == '[') || 
                    (c == '}' && top == '{')
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.empty();
    }
};
