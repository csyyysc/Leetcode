#include <stdio.h>
#include <stdlib.h>

/*
Greedy algorithm is a method to select the best option at a certain condition, and 
lead the solution to be best. 
The greatest difference between "Dynamic Programming" and "Greedy Algorithm" is that 
the GA makes option to every sub-problem, therefore, it never reconsiders.
*/

int maxSubArray(int* nums, int numsSize)
{
    int i = 0;
    int sum = 0, min = 0;
    for(i = 0; i < numsSize; i++)
    {
        sum += num[i];
        if(sum - min > max)
            max = sum - min;
        if(sum < min)
            min = sum;
    }
    return max;
}