class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        current = head

        while current:
            next_n = current.next
            current.next = prev
            prev = current
            current = next_n
        
        return prev