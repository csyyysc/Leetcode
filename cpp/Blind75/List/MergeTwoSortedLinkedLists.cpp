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
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        ListNode *list = new ListNode();
        ListNode *cur = list;

        while (list1 && list2)
        {
            if (list1->val < list2->val)
            {
                cur->next = new ListNode(list1->val);
                list1 = list1->next;
            }
            else
            {
                cur->next = new ListNode(list2->val);
                list2 = list2->next;
            }
            cur = cur->next;
        }

        while (list1)
        {
            cur->next = new ListNode(list1->val);
            list1 = list1->next;
            cur = cur->next;
        }

        while (list2)
        {
            cur->next = new ListNode(list2->val);
            list2 = list2->next;
            cur = cur->next;
        }

        return list->next;
    }
};
