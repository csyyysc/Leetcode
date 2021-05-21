#include <stdio.h>
#include <stdlib.h>

/*
Now the goal is to find the maximum subarray, however, how to know the subarray its length, is it two? three? or what?
As a start, I use Brute method in order to get a deeper understanding over this question.
*/

int maxSubArray(int* nums, int numsSize)
{
    int i, j;
    int max = nums[0];
    
    /*Here we add the subarray subsequentally, from length, say , 5 , 4 ,3 , 2 and then 1, 
    which just clarifies my question when I frist see this question that is how to know the length 
    of the subarray.
    */
    for(i = 1; i < numsSize; i++)
    {
        nums[i] = nums[i] + nums[i-1];
        if(max < nums[i])
            max = nums[i];
    }

    /*
    Actually, the loop below seems not get the subarray. Instead, in my point of view, I think
    the loop merely obtain the largest sum of the array. 
    */
    for(i = 0; i < numsSize; i++)
    {
        for(j = i+1; j < numsSize; j++)
        {
            if(nums[j] - nums[i] > max)
                max = nums[j] - nums[i];
        }
    }
    return max;
}