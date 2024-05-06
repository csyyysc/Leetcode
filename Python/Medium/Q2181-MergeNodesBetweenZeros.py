# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        s = 0
        prev = head
        curr = head.next

        while curr:
            if curr.val != 0:
                s += curr.val
            else:
                prev.val = s
                prev.next = curr.next
                prev = prev.next
                s = 0
            curr = curr.next
        return head