#include <stdio.h>
#include <stdlib.h>

/*Here I will utilize the most fundamental way "Brute Method" to solve this question, and I will use other method to solve later.*/

int searchInsert(int* nums, int numsSize, int target)
{
    int i;
    for(i = 0; i < numsSize; i++)
    {
        if(target == *nums || target < *nums)
        {
            return i;
        }else if(i == numsSize - 1)
        {
            return numsSize;
        }
        nums++;
    }
    return 0;
}