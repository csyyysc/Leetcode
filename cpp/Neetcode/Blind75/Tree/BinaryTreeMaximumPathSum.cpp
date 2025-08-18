/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

class Solution {
private:
    int dfs(TreeNode *node, int &max_sum) {
        if (node == nullptr) return 0;
        
        int left = max(dfs(node->left, max_sum), 0);
        int right = max(dfs(node->right, max_sum), 0);

        int current_sum = node->val + left + right;
        max_sum = max(max_sum, current_sum);
        return node->val + max(left, right);
    }
public: 
    int maxPathSum(TreeNode* root) {
        int m = -10000;
        dfs(root, m);
        return m;
    }
};
