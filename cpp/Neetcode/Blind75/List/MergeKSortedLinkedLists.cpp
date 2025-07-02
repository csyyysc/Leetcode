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
    ListNode *mergeKLists(vector<ListNode *> &lists)
    {
        vector<int> values;

        int rows = lists.size();
        for (int i = 0; i < rows; ++i)
        {
            ListNode *list = lists[i];
            while (list)
            {
                values.push_back(list->val);
                list = list->next;
            }
        }
        sort(values.begin(), values.end());

        ListNode *m_list = new ListNode();
        ListNode *curr = m_list;
        for (int i = 0; i < values.size(); ++i)
        {
            curr->next = new ListNode(values[i]);
            curr = curr->next;
        }

        return m_list->next;
    }

    ListNode *mergeKListsOpt(vector<ListNode *> &lists)
    {
        ListNode *m_list = nullptr;

        for (int i = 0; i < lists.size(); ++i)
        {
            m_list = this->mergeTwoList(m_list, lists[i]);
        }

        return m_list;
    }

    ListNode *mergeTwoList(ListNode *list1, ListNode *list2)
    {
        ListNode *list = new ListNode();
        ListNode *curr = list;

        while (list1 && list2)
        {
            if (list1->val < list2->val)
            {
                curr->next = new ListNode(list1->val);
                list1 = list1->next;
            }
            else
            {
                curr->next = new ListNode(list2->val);
                list2 = list2->next;
            }
            curr = curr->next;
        }

        curr->next = list1 ? list1 : list2;

        return list->next;
    }
};
