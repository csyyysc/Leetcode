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

class Solution
{
public:
    int kthSmallest(TreeNode *root, int k)
    {
        vector<int> values;

        queue<TreeNode *> q;
        q.push(root);

        while (!q.empty())
        {
            int levelSize = q.size();

            for (int i = 0; i < levelSize; ++i)
            {
                TreeNode *node = q.front();
                q.pop();
                values.push_back(node->val);
                if (node->left)
                    q.push(node->left);
                if (node->right)
                    q.push(node->right);
            }
        }

        sort(values.begin(), values.end());
        return values[k - 1];
    }

    int cnt = 0;
    int tgt = -1;

    int kthSmallestOpt(TreeNode *root, int k)
    {
        inorder(root, k);
        return tgt;
    }

    void inorder(TreeNode *root, int k)
    {
        if (!root)
            return;

        inorder(root->left, k);

        ++cnt;
        if (cnt == k)
        {
            tgt = root->val;
            return;
        }

        inorder(root->right, k);
    }
};
