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
    ListNode *removeNthFromEnd(ListNode *head, int n)
    {
        vector<int> values;

        ListNode *ptr = head;
        while (ptr)
        {
            values.push_back(ptr->val);
            ptr = ptr->next;
        }

        ListNode *list = new ListNode();
        ListNode *curr = list;
        int size = values.size();
        for (int i = 0; i < size; ++i)
        {
            if (i != size - n)
            {
                curr->next = new ListNode(values[i]);
                curr = curr->next;
            }
        }
        return list->next;
    }

    ListNode *removeNthFromEndOpt(ListNode *head, int n)
    {
        ListNode dummy(0, head);
        ListNode *slow = &dummy;
        ListNode *fast = &dummy;

        for (int i = 0; i <= n; ++i)
        {
            fast = fast->next;
        }

        while (fast)
        {
            fast = fast->next;
            slow = slow->next;
        }

        ListNode *r_node = slow->next;
        slow->next = r_node->next;
        delete r_node;

        return dummy.next;
    }
};
