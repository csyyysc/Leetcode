from typing import Optional

# https://leetcode.com/problems/reverse-linked-list/

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr_ptr = head
        prev = None

        while curr_ptr:
            next_node = curr_ptr.next
            curr_ptr.next = prev
            prev = curr_ptr
            curr_ptr = next_node

        return prev


if __name__ == "__main__":
    solution = Solution()
    print(solution.reverseList([1, 2, 3, 4, 5]))
