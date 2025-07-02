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
    TreeNode *invertTree(TreeNode *root)
    {
        if (!root)
            return nullptr;

        TreeNode *swap = root->left;
        root->left = invertTree(root->right);
        root->right = swap;

        return root;
    }

    TreeNode *invertTreeStack(TreeNode *root)
    {
        if (!root)
            return nullptr;

        stack<TreeNode *> st;
        st.push(root);

        while (!st.empty())
        {
            TreeNode *node = st.top();
            st.pop();

            TreeNode *swap = node->left;
            node->left = node->right;
            node->right = swap;

            if (node->left)
                st.push(node->left);
            if (node->right)
                st.push(node->right);
        }

        return root;
    }

    TreeNode *invertTreeQueue(TreeNode *root)
    {
        if (!root)
            return nullptr;

        queue<TreeNode *> q;
        q.push(root);

        while (!q.empty())
        {
            TreeNode *node = q.front();
            q.pop();

            TreeNode *swap = node->left;
            node->left = node->right;
            node->right = swap;

            if (node->left)
                q.push(node->left);
            if (node->right)
                q.push(node->right);
        }

        return root;
    }
};
