# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        ptr = head
        pptr = head.next

        while(ptr and pptr):
            ist = self.greatestCommonDivisor(ptr.val, pptr.val)
            ptr.next = ListNode(ist, pptr)
            ptr = ptr.next.next
            pptr = pptr.next
        return head

    def greatestCommonDivisor(self, a, b):
        while b != 0:
            a, b = b, a % b
        return a