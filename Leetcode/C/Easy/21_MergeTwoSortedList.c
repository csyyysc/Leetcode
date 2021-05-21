#include <stdio.h>
#include <stdlib.h>

struct ListNode{
    int value;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* L1, struct ListNode* L2)
{
    /*Check if L1 or L2 is an empty list or not.*/
    if(!L1)
        return L2;
    if(!L2)
        return L1;
    if(!L1 && !L2)
        return NULL;
    
    /*Create List to link list*/
    struct ListNode *temp, *returnList;
    if(L1->value <= L2->value)
    {
        /*Link the L1 to temp if the first value comparison shows that the L1 is smaller.*/
        temp = L1;
        /*Tell the program to indicate the next value in L1 List.*/
        L1 = L1->next;
    } else {
        temp = L2;
        L2 = L2->next;
    }
    /*Let returnList point to the "Head" of the list.*/
    returnList = temp;
    /*When one of the list reaches its end, break while-loop*/
    while(L1 && L2)
    {
        if(L1->value < L2->value)
        {
            temp->next = L1;
            L1 = L1->next;
        } else {
            temp->next = L2;
            L2 = L2->next;
        }
        temp->next->next = NULL;
        temp = temp->next;
    }
    /*Pointing to the rest of list*/
    if(L1)
    {
        temp->next = L1;
    }else {
        temp->next = L2;
    }
    return returnList;
}