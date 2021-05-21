#include <stdio.h>
#include <stdlib.h>

/*The hint tells us that a straight-forward method to solve this question is to use counting sort*/
/*
Coounting sort is a way based on keys. It works by counting the number of objects having distinct key values.
Finally, calculate the position of each objects in the output sequence.
*/

/*
Obviously, here we have two for-loop function. This uses two-pass algorithm, and I will implement another way to see the difference by 
trying to write a one-pass algorithm to complete.
*/

void sortColors(int *nunms, int numsSize)
{
    int red = 0, white = 0, blue = 0;
    int i;

    for(i = 0; i < numsSize; i++)
    {
        if(nums[i] == 0)
            red++;
        else if(nums[i] == 1)
            white++;
        else if(nums[i] == 2)
            blue++;
    }

    for(i = 0; i < numsSize; i++)
    {
        if(red != 0)
            nums[i] = 0;
            red--;
        else if(white != 0)
            nums[i] = 1;
            white--;
        else if(blue != 0)
            nums[i] = 2;
            blue--;
    }
}