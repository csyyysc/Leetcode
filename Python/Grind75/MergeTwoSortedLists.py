from typing import Optional

# https://leetcode.com/problems/merge-two-sorted-lists/

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1 and not list2:
            return None

        mergeList = ListNode()
        ptr = mergeList

        while list1 and list2:
            if list1.val < list2.val:
                ptr.val = list1.val
                list1 = list1.next
            else:
                ptr.val = list2.val
                list2 = list2.next
            ptr.next = ListNode()
            ptr = ptr.next

        if list1:
            ptr.val = list1.val
            ptr.next = list1.next
        if list2:
            ptr.val = list2.val
            ptr.next = list2.next

        return mergeList


class SolutionOptimized:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        ptr = dummy

        while list1 and list2:
            if list1.val < list2.val:
                ptr.next = list1
                list1 = list1.next
            else:
                ptr.next = list2
                list2 = list2.next
            ptr = ptr.next

        ptr.next = list1 if list1 else list2

        return dummy.next


if __name__ == "__main__":
    solution = Solution()
    print(solution.mergeTwoLists(ListNode(1, ListNode(2, ListNode(4))),
          ListNode(1, ListNode(3, ListNode(4)))))
