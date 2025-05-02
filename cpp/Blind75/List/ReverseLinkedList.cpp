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
    ListNode *reverseList(ListNode *head)
    {
        vector<int> values;

        ListNode *n = head;
        while (n)
        {
            values.push_back(n->val);
            n = n->next;
        }

        ListNode *ptr = new ListNode();
        ListNode *cur = ptr;
        for (int val : values)
        {
            cur->next = new ListNode(val);
            cur = cur->next;
        }

        return ptr->next;
    }

    ListNode *reverseListOpt(ListNode *head)
    {
        ListNode *prev = nullptr;
        ListNode *cur = head;

        while (cur)
        {
            ListNode *next_node = cur->next;
            cur->next = prev;
            prev = cur;
            cur = next_node;
        }

        return prev;
    }
};
