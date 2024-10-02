# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        m = 0
        nodes = []
        current = head

        while current:
            nodes.append(current.val)
            current = current.next
        
        l, r = 0, len(nodes) - 1
        while l < r:
            m = max(m, nodes[l] + nodes[r])
            l += 1
            r -= 1

        return m
    
    def pairSumOptimized(self, head: Optional[ListNode]) -> int:
        if not head:
            return None

        prev = None
        slow = head
        fast = head

        while fast and fast.next:
            fast = fast.next.next # For the n // 2 loop termination
            tmp = slow.next # Left parts
            slow.next = prev 
            prev = slow # Right parts
            slow = tmp
        
        max_pair = 0    
        while prev:
            max_pair = max(max_pair, prev.val + tmp.val)
            prev = prev.next
            tmp = tmp.next

        return max_pair
        