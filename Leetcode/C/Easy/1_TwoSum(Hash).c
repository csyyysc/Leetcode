#include <stdlib.h>
#include <stdio.h>

/*
In this implementation, I use the concept of hash table to reduce the Big-O.
We already know the Brute method of TwoSum requires O(n^2) to perform the calculation, so here I hope to make the TC to be 
less than O(n^2).
*/


struct node {
    long val;
    int index;
    struct node* next;
};

