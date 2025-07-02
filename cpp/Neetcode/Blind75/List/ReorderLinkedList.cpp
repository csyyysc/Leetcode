/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution
{
public:
    void reorderList(ListNode *head)
    {
        vector<int> values;

        ListNode *iter = head;
        while (iter)
        {
            values.push_back(iter->val);
            iter = iter->next;
        }

        int l = 0;
        int r = values.size() - 1;
        int i = 0;
        iter = head;

        while (l <= r)
        {
            if (i % 2 == 0)
            {
                iter->val = values[l++];
            }
            else
            {
                iter->val = values[r--];
            }
            iter = iter->next;
            ++i;
        }
    }

    void reorederListOpt(ListNode *head)
    {
        ListNode *slow = head;
        ListNode *fast = head;
        while (fast && fast->next)
        {
            slow = slow->next;
            fast = fast->next->next;
        }

        ListNode *prev = nullptr;
        ListNode *curr = slow;
        while (curr)
        {
            ListNode *next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = curr->next;
        }

        ListNode *first = head;
        ListNode *second = prev;
        while (second->next)
        {
            ListNode *next_node_1 = first->next;
            ListNode *next_node_2 = second->next;

            first->next = second;
            second->next = next_node_1;

            first = next_node1;
            second = next_node_2;
        }
    }
};
