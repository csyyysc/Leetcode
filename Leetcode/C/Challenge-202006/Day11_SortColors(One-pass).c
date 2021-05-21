#include <stdio.h>
#include <stdlib.h>

void sortColors(int* nums, int numsSize)
{
    int i, j;
    int temp; 
    int compare;

    for(i = 0; i < numsSize-1; i++)
    {
        compare = i;
        for(j = i+1;  j < numsSize; j++)
            if(nums[compare]>nums[j])
                compare = j;
        if(i!=compare)
        {
            temp = nums[i];
            nums[i] = nums[compare];
            nums[compare] = temp;
        }
    }
}