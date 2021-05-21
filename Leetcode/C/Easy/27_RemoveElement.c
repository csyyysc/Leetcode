#include <stdio.h>
#include <stdlib.h>

/*Modifying the nums directly.*/


int removeElement(int* nums, int numsSize, int val)
{
    /* Also, we could write this way
    if(nums == NULL)
        return 0;
    */
    if(numsSize == 0)
        return 0;
    int i, countToVal = 0, finalSize = numsSize;
    for(i = 0; i < numsSize; i++)
    {
        if(nums[i] == val)
        {
            countToVal++;
            finalSize--;
        }else{
            /*Below tell that we replace the position which equal to the val*/
            nums[i-countToVal] = nums[i];
        }
    }
    return finalSize;
}